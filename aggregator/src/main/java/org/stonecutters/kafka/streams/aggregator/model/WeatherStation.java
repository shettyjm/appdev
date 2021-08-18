package org.stonecutters.kafka.streams.aggregator.model;

import io.quarkus.runtime.annotations.RegisterForReflection;

@RegisterForReflection 
public class WeatherStation {

    public int id;
    public String name;
}