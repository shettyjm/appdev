package org.stonecutters.kafka.streams.water.aggregator.model;

import java.time.Instant;

public class WaterConsumptionEvent {

    public int hlRegionId;
    public String hlRegionName;
    public Instant timestamp;
    public double value;

    public WaterConsumptionEvent(int hlRegionId, String hlRegionName, Instant timestamp,
            double value) {
        this.hlRegionId = hlRegionId;
        this.hlRegionName = hlRegionName;
        this.timestamp = timestamp;
        this.value = value;
    }
}


//  this.id = id;
//             this.name = name;
//             this.averageDailyPerCapitaUsage = averageDailyPerCapitaUsage;