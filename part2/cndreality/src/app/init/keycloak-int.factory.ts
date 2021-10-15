
import { KeycloakService } from "keycloak-angular";

import { environment } from '../../environments/environment';

const config1:any = {
  url: environment.KeyCloakUrl ,
  realm: environment.KeyCloakRealm,
  clientId: environment.KeyCloakClientId,
};
export function initializeKeycloak(
  keycloak: KeycloakService
  ) {

    console.log("int ising initializeKeycloak using "+JSON.stringify(config1));

    const opt1:any ={
      config: config1,
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: false
       // silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
      },
    };

    return () =>
      keycloak.init(opt1);
}

// {
//   url: 'http://localhost:8080' + '/auth',
//   realm: 'master',
//   clientId: 'keycloak-angular',
// }

// based upon the kc image available here - https://github.com/mauriciovigolo/keycloak-angular/blob/master/example/scripts/create-client.sh

// role based views - https://dev.to/anthonyikeda/securing-angular-and-quarkus-with-keycloak-pt-1-4g33
// frame-src 'self' http://localhost:4200; frame-ancestors 'self' http://localhost:4200; object-src none;
// frame-src 'self'; frame-ancestors 'self'; object-src 'none';