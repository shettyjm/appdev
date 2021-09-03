package org.stonecutters.kafka.streams.water.producer.generator;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.Duration;
import java.time.Instant;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;

import javax.enterprise.context.ApplicationScoped;

import io.smallrye.mutiny.Multi;
import io.smallrye.reactive.messaging.kafka.Record;
import org.eclipse.microprofile.reactive.messaging.Outgoing;
import org.jboss.logging.Logger;

/**
 * A bean producing random temperature data every second.
 * The values are written to a Kafka topic (temperature-values).
 * Another topic contains the name of weather stations (weather-stations).
 * The Kafka configuration is specified in the application configuration.
 */
@ApplicationScoped
public class WaterUsageEventGenerator {

    private static final Logger LOG = Logger.getLogger(WaterUsageEventGenerator.class);

    private Random random = new Random();

    private List<HydrologicRegion> hydorRegions = List.of(
                        new HydrologicRegion(1, "Colorado River", 150),
                        new HydrologicRegion(2, "Tulare Lake",128),
                        new HydrologicRegion(3, "Sacramento River", 117),
                        new HydrologicRegion(4, "South Lahontan", 113),
                        new HydrologicRegion(5, "San Joaquin River", 100),
                        new HydrologicRegion(6, "North Lahontan", 89),
                        new HydrologicRegion(7, "Statewide Average", 85),
                        new HydrologicRegion(8, "South Coast", 80),
                        new HydrologicRegion(9, "Central Coast", 71),
                        new HydrologicRegion(10, "Northern Coast", 71),
                      //  new HydrologicRegion(12, "So Cal", 141),
                        new HydrologicRegion(11, "San FranciscoBay", 71));
                        

    @Outgoing("water-consumption-values")                                        
    public Multi<Record<Integer, String>> generate() {
        return Multi.createFrom().ticks().every(Duration.ofMillis(1000))    
                .onOverflow().drop()
                .map(tick -> {
                    HydrologicRegion hydroRegion = hydorRegions.get(random.nextInt(hydorRegions.size()));

                   
                    double averageDailyPerCapitaUsage = BigDecimal.valueOf(
                        random.nextInt((11) )
                        // random.nextGaussian() * 15 
                        + hydroRegion.averageDailyPerCapitaUsage)
                            .setScale(1, RoundingMode.HALF_UP)
                            .doubleValue();

                    LOG.infov("hydroRegion: {0}, perCapitaConsumption: {1}", hydroRegion.name, averageDailyPerCapitaUsage);
                    return Record.of(hydroRegion.id, Instant.now() + ";" + averageDailyPerCapitaUsage);
                });
    }

    @Outgoing("hydrologic-regions")                                          
    public Multi<Record<Integer, String>> hydorRegions() {
        return Multi.createFrom().items(hydorRegions.stream()
            .map(s -> Record.of(
                    s.id,
                    "{ \"id\" : " + s.id +
                    ", \"name\" : \"" + s.name + "\" }"))
        );
    }

    // https://lao.ca.gov/Publications/Report/3611
    // daily per capita residential use
    private static class HydrologicRegion {

        int id;
        String name;
        int averageDailyPerCapitaUsage;

        public HydrologicRegion(int id, String name, int averageDailyPerCapitaUsage) {
            this.id = id;
            this.name = name;
            this.averageDailyPerCapitaUsage = averageDailyPerCapitaUsage;
        }
    }
}