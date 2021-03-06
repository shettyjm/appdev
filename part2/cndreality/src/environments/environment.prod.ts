export const environment = {
  production: true,
  
  apiUrl:  window.apiUrl || "http://dev-localhost:8090",
  KeyCloakUrl :  window.KeyCloakUrl || "http://dev-localhost:8080/auth",
  KeyCloakRealm:   window.KeyCloakRealm || "dev-master",
  KeyCloakClientId :  window.KeyCloakClientId || "dev-kc-client-id",
  debug:  window.enableDebug || true,
  threescaleApiUrl : window.threescaleApiUrl || 'http://prodapiplatfrom_baseurl',
  threescaleApiCityUrl :window.threescaleApiCityUrl || "https://3scale-city-url-here" ,
  corserrorpi : "https://city-dat-corsdemo-product-3scale-apicast-staging.apps.sacluster.stonecutterspod.live"
};
