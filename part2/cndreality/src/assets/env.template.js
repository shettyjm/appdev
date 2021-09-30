(function(window) {
   
    window.__env = window.__env || {};
     // // Environment variables
    window.apiUrl ="${API_URL}";
    window.KeyCloakUrl = "${KEYCLOAK_URL}";
    window.KeyCloakRealm="${KEYCLOAK_REALM}";
    window.KeyCloakClientId= "${KEYCLOAK_CLIENT_ID}";
    window.enableDebug =  "${DEBUG}";
    
  })(this);