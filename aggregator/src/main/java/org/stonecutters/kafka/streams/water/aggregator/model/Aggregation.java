package org.stonecutters.kafka.streams.water.aggregator.model;

import java.math.BigDecimal;
import java.math.RoundingMode;

import io.quarkus.runtime.annotations.RegisterForReflection;

@RegisterForReflection
public class Aggregation {

    public int hlRegionId;
    public String hlRegionName;
    public double min = Double.MAX_VALUE;
    public double max = Double.MIN_VALUE;
    public int count;
    public double sum;
    public double avg;

    public Aggregation updateFrom(WaterConsumptionEvent waterConsumedEvent) {
        hlRegionId = waterConsumedEvent.hlRegionId;
        hlRegionName = waterConsumedEvent.hlRegionName;

        count++;
        sum += waterConsumedEvent.value;
        avg = BigDecimal.valueOf(sum / count).setScale(1, RoundingMode.HALF_UP).doubleValue();

        min = Math.min(min, waterConsumedEvent.value);
        max = Math.max(max, waterConsumedEvent.value);

        return this;
    }

    public String toString() {
        return "{ \n" + "hlRegionId :" + this.hlRegionId + "\n" + "hlRegionName :" + this.hlRegionName + "\n" + "\n}";
    }
}