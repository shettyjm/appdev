package org.stonecutters.kafka.streams.water.aggregator.streams;

import java.util.Optional;
import java.util.OptionalInt;

import org.stonecutters.kafka.streams.water.aggregator.model.HydrologicRegionData;

public class GetHydrologicRegionDataResult {
    private static GetHydrologicRegionDataResult NOT_FOUND = new GetHydrologicRegionDataResult(null);

    private final HydrologicRegionData result;

    private GetHydrologicRegionDataResult(HydrologicRegionData result) {
        this.result = result;
    }

    public static GetHydrologicRegionDataResult found(HydrologicRegionData data) {
        return new GetHydrologicRegionDataResult(data);
    }

    public static GetHydrologicRegionDataResult notFound() {
        return NOT_FOUND;
    }

    public Optional<HydrologicRegionData> getResult() {
        return Optional.ofNullable(result);
    }
}
