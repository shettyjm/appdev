(function(window) {
   
    window.__env = window.__env || {};
     // // Environment variables
    window.apiUrl ="${API_URL}";
    window.KeyCloakUrl = "${KEYCLOAK_URL}";
    window.KeyCloakRealm="${KEYCLOAK_REALM}";
    window.KeyCloakClientId= "${KEYCLOAK_CLIENT_ID}";
    window.enableDebug =  "${DEBUG}";
    window.threescaleApiUrl = "${API_PLATFORM_API_URL}"
    window.threescaleApiCityUrl = "${API_PLATFORM_CITY_API_URL}"
    
  })(this);