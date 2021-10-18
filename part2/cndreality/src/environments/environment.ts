// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
   production: false,
  //configFile: 'assets/config/config.dev.json',
   threescaleApiUrl :  window.threescaleApiUrl || "https://hr-oidc-product-3scale-apicast-staging.apps.sacluster.stonecutterspod.live",
   threescaleApiCityUrl :window.threescaleApiCityUrl || "https://3scale-city-url-here",
   apiUrl:  window.apiUrl || "http://dev-localhost:8090",
   KeyCloakUrl :  window.KeyCloakUrl|| "http://dev-localhost:8080/auth",
   KeyCloakRealm:   window.KeyCloakRealm || "dev-master",
   KeyCloakClientId :  window.KeyCloakClientId || "dev-kc-client-id",
   debug:  window.enableDebug || true,
   corserrorpi : "https://city-dat-corsdemo-product-3scale-apicast-staging.apps.sacluster.stonecutterspod.live"
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
