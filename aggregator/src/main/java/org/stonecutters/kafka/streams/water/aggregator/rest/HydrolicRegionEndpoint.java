package org.stonecutters.kafka.streams.water.aggregator.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.stonecutters.kafka.streams.water.aggregator.streams.GetHydrologicRegionDataResult;
import org.stonecutters.kafka.streams.water.aggregator.streams.GetHydrologicRegionsDataResult;
import org.stonecutters.kafka.streams.water.aggregator.streams.InteractiveQueries;

@ApplicationScoped
@Path("/hydrologicregions")
public class HydrolicRegionEndpoint {
    @Inject
    InteractiveQueries interactiveQueries;

    @GET
    @Path("/")
    public Response getHydrologicRegionsData() {
        GetHydrologicRegionsDataResult result = interactiveQueries.getHydrologicRegionsData();

        if (result.getResult().isPresent()) {
            return Response.ok(result.getResult().get()).build();
        } else {
            return Response.status(Status.NOT_FOUND.getStatusCode(), "No data found for hydologic regions station ").build();
        }
    }

    @GET
    @Path("/{id}")
    public Response getHydrologicRegionData(@PathParam("id") int id) {
        GetHydrologicRegionDataResult result = interactiveQueries.getHydrologicRegionData(id);

        if (result.getResult().isPresent()) {
            return Response.ok(result.getResult().get()).build();
        } else {
            return Response.status(Status.NOT_FOUND.getStatusCode(), "No data found for hydrologic region " + id).build();
        }
    }
}
