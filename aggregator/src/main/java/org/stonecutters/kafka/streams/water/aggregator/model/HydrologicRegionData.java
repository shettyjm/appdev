package org.stonecutters.kafka.streams.water.aggregator.model;

import io.quarkus.runtime.annotations.RegisterForReflection;

@RegisterForReflection
public class HydrologicRegionData {
    public int hlRegionId;
    public String hlRegionName;
    public double min = Double.MAX_VALUE;
    public double max = Double.MIN_VALUE;
    public int count;
    public double avg;

    private HydrologicRegionData(int hlRegionId, String hlRegionName, double min, double max,
            int count, double avg) {
        this.hlRegionId = hlRegionId;
        this.hlRegionName = hlRegionName;
        this.min = min;
        this.max = max;
        this.count = count;
        this.avg = avg;
    }

    public static HydrologicRegionData from(Aggregation aggregation) {
        return new HydrologicRegionData(
                aggregation.hlRegionId,
                aggregation.hlRegionName,
                aggregation.min,
                aggregation.max,
                aggregation.count,
                aggregation.avg);
    }
}
