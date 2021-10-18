(function(window) {
    
    window.__env = window.__env || {};
    window.apiUrl ="http://temphost";
    window.KeyCloakUrl = "http://keycloak-http.apps.sacluster.stonecutterspod.live/auth/";
    window.KeyCloakRealm="saapigw";
    window.KeyCloakClientId= "be434990";
    window.enableDebug =  "true";
    window.threescaleApiUrl = "https://hr-oidc-product-3scale-apicast-staging.apps.sacluster.stonecutterspod.live"
    window.threescaleApiCityUrl = "https://city-ranking-info-3scale-apicast-staging.apps.sacluster.stonecutterspod.live"
  })(this);

//http://${your_keycloak_base_url}/auth
  // http://${your_keycloak_base_url}/auth/realms/saapigw/protocol/openid-connect/token
  // http://${your_keycloak_base_url}/auth/realms/saapigw/.well-known/openid-configuration