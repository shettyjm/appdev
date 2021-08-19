package org.stonecutters.kafka.streams.water.aggregator.processor;

import java.time.Instant;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Produces;

import org.stonecutters.kafka.streams.water.aggregator.model.WaterConsumptionEvent;
import org.stonecutters.kafka.streams.water.aggregator.model.HydrologicRegion;
import org.stonecutters.kafka.streams.water.aggregator.model.Aggregation;
import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.Topology;
import org.apache.kafka.streams.kstream.Consumed;
import org.apache.kafka.streams.kstream.GlobalKTable;
import org.apache.kafka.streams.kstream.Materialized;
import org.apache.kafka.streams.kstream.Produced;
import org.apache.kafka.streams.state.KeyValueBytesStoreSupplier;
import org.apache.kafka.streams.state.Stores;

import io.quarkus.kafka.client.serialization.ObjectMapperSerde;

@ApplicationScoped
public class TopologyProducer {

    static final String HYDROLOGIC_REGIONS_STORE = "hydrologic-regions-store";

    private static final String HYDROLOGIC_REGIONS_TOPIC = "hydrologic-regions";
    private static final String WATER_CONSUMPTIONS_TOPIC = "water-consumption-values";
    private static final String WATER_CONSUMPTION_AGGREGATED_TOPIC = "water-consumption-aggregated";

    @Produces
    public Topology buildTopology() {
        StreamsBuilder builder = new StreamsBuilder();

        ObjectMapperSerde<HydrologicRegion> hydrologicRegionSerde = new ObjectMapperSerde<>(
                HydrologicRegion.class);
        ObjectMapperSerde<Aggregation> aggregationSerde = new ObjectMapperSerde<>(Aggregation.class);

        KeyValueBytesStoreSupplier storeSupplier = Stores.persistentKeyValueStore(
                HYDROLOGIC_REGIONS_STORE);

        GlobalKTable<Integer, HydrologicRegion> hlRegions = builder.globalTable( 
                HYDROLOGIC_REGIONS_TOPIC,
                Consumed.with(Serdes.Integer(), hydrologicRegionSerde));

        builder.stream(                                                       
                        WATER_CONSUMPTIONS_TOPIC,
                        Consumed.with(Serdes.Integer(), Serdes.String())
                )
                .join(                                                        
                        hlRegions,
                        (hlRegionId, timestampAndValue) -> hlRegionId,
                        (timestampAndValue, hlRegion) -> {
                            String[] parts = timestampAndValue.split(";");
                            return new WaterConsumptionEvent(hlRegion.id, hlRegion.name,
                                    Instant.parse(parts[0]), Double.valueOf(parts[1]));
                        }
                )
                .groupByKey()                                                 
                .aggregate(                                                   
                        Aggregation::new,
                        (hlRegionId, value, aggregation) -> aggregation.updateFrom(value),
                        Materialized.<Integer, Aggregation> as(storeSupplier)
                            .withKeySerde(Serdes.Integer())
                            .withValueSerde(aggregationSerde)
                )
                .toStream()
                .to(                                                          
                        WATER_CONSUMPTION_AGGREGATED_TOPIC,
                        Produced.with(Serdes.Integer(), aggregationSerde)
                );

        return builder.build();
    }
}