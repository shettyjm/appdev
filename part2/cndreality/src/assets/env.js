(function(window) {
    
    window.__env = window.__env || {};
    window.apiUrl ="http://temphost";
    window.KeyCloakUrl = "http://localhost:8080/auth";
    window.KeyCloakRealm="saapigw";
    window.KeyCloakClientId= "be434990";
    window.enableDebug =  "true";
    window.threescaleApiUrl = "https://employeesapi.apps.sacluster.stonecutterspod.live"
    window.threescaleApiCityUrl = "https://city-ranking-info-3scale-apicast-staging.apps.sacluster.stonecutterspod.live"
  })(this);

//http://${your_keycloak_base_url}/auth
  // http://${your_keycloak_base_url}/auth/realms/saapigw/protocol/openid-connect/token
  // http://${your_keycloak_base_url}/auth/realms/saapigw/.well-known/openid-configuration