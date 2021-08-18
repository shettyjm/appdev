package org.stonecutters.kafka.streams.water.aggregator.model;

import io.quarkus.runtime.annotations.RegisterForReflection;

@RegisterForReflection 
public class HydrologicRegion {

    public int id;
    public String name;
}