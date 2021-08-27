package org.stonecutters.kafka.streams.water.aggregator.streams;

import java.util.Optional;


import org.stonecutters.kafka.streams.water.aggregator.model.HydrologicRegionData;

public class GetHydrologicRegionsDataResult {
    private static GetHydrologicRegionsDataResult NOT_FOUND = new GetHydrologicRegionsDataResult(null);

    private final HydrologicRegionData[] result;

    private GetHydrologicRegionsDataResult(HydrologicRegionData[] result) {
        this.result = result;
    }

    public static GetHydrologicRegionsDataResult found(HydrologicRegionData[] result) {
        return new GetHydrologicRegionsDataResult(result);
    }

    public static GetHydrologicRegionsDataResult notFound() {
        return NOT_FOUND;
    }

    public Optional<HydrologicRegionData[]> getResult() {
        return Optional.ofNullable(result);
    }
}
