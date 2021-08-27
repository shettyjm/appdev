package org.stonecutters.kafka.streams.water.aggregator.streams;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.apache.kafka.streams.KafkaStreams;
import org.apache.kafka.streams.KeyValue;
import org.apache.kafka.streams.StoreQueryParameters;
import org.apache.kafka.streams.errors.InvalidStateStoreException;
import org.apache.kafka.streams.state.KeyValueIterator;
import org.apache.kafka.streams.state.QueryableStoreType;
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

    public GetHydrologicRegionsDataResult getHydrologicRegionsData() {
       // Aggregation result = getHydrologicRegionStore().get());


        ReadOnlyKeyValueStore<Integer, Aggregation> keyValueStore = getHydrologicRegionStore2();

        // store(TopologyProducer.HYDROLOGIC_REGIONS_STORE,
        // QueryableStoreTypes.keyValueStore());
        // Get value by key
        System.out.println("count for hydrologicregions store:" + keyValueStore.get(1));

        // // Get the values for a range of keys available in this application instance
        // KeyValueIterator<String, Long> range = keyValueStore.range("all", "streams");
        // while (range.hasNext()) {
        //     KeyValue<String, Long> next = range.next();
        //     System.out.println("count for " + next.key + ": " + next.value);
        // }
        // // close the iterator to release resources
        // range.close();

        // Get the values for all of the keys available in this application instance
        KeyValueIterator<Integer, Aggregation> rangeAll = keyValueStore.all();
        System.out.println("keyvaluestore - approximateNumEntries"+keyValueStore.approximateNumEntries());
        HydrologicRegionData [] results = new HydrologicRegionData [11];
        int count =0;
        while (rangeAll.hasNext()) {
            KeyValue<Integer,Aggregation> next = rangeAll.next();
            System.out.println("Aggregation for " + next.key + ": " + next.value);

            results[count] = HydrologicRegionData.from(next.value);
            count ++;
        }
        // close the iterator to release resources
        rangeAll.close();


        return GetHydrologicRegionsDataResult.found(results);
        // if (result != null) {
        //     return GetHydrologicRegionDataResult.found(HydrologicRegionData.from(result));
        // } else {
        //     return GetHydrologicRegionDataResult.notFound();
        // }
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

    private ReadOnlyKeyValueStore<Integer, Aggregation> getHydrologicRegionStore2() {

        while (true) {
            try {
                return streams.store(StoreQueryParameters.fromNameAndType(TopologyProducer.HYDROLOGIC_REGIONS_STORE,
                        QueryableStoreTypes.keyValueStore()));
            } catch (InvalidStateStoreException e) {
                // ignore, store not ready yet
                System.out.println("HYDROLOGIC_REGIONS_STORE state is invalid" + e.getMessage());
            }
        }
    }

}
