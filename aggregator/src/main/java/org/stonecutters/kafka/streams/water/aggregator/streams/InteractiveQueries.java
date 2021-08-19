package org.stonecutters.kafka.streams.water.aggregator.streams;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.apache.kafka.streams.KafkaStreams;
import org.apache.kafka.streams.errors.InvalidStateStoreException;
import org.apache.kafka.streams.state.QueryableStoreTypes;
import org.apache.kafka.streams.state.ReadOnlyKeyValueStore;
import org.stonecutters.kafka.streams.water.aggregator.model.Aggregation;
import org.stonecutters.kafka.streams.water.aggregator.model.HydrologicRegionData;
import org.stonecutters.kafka.streams.water.aggregator.processor.TopologyProducer;

@ApplicationScoped
public class InteractiveQueries {

    @Inject
    KafkaStreams streams;

    public GetHydrologicRegionDataResult getHydrologicRegionData(int id) {
        Aggregation result = getHydrologicRegionStore().get(id);

        if (result != null) {
            return GetHydrologicRegionDataResult.found(HydrologicRegionData.from(result));
        } else {
            return GetHydrologicRegionDataResult.notFound();
        }
    }

    private ReadOnlyKeyValueStore<Integer, Aggregation> getHydrologicRegionStore() {
        while (true) {
            try {
                return streams.store(TopologyProducer.HYDROLOGIC_REGIONS_STORE, QueryableStoreTypes.keyValueStore());
        
            } catch (InvalidStateStoreException e) {
                // ignore, store not ready yet
            }
        }
    }
}
