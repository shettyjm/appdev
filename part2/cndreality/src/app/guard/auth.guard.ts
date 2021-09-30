import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {

  constructor(
    protected readonly router: Router,
    protected readonly keycloak: KeycloakService
  ) {
    super(router, keycloak);
  }

  async isAccessAllowed(

    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {

    if (!this.authenticated) {
      console.log("not authenticated.. trying to authenticate");
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      });
    }else{
      console.log("already authenticated..allowig route");
    
    }
    console.log(`AuthGuard invoked.. returning  ${this.authenticated}`);
    return this.authenticated;
  }
}


export class AlwaysAuthGuard implements CanActivate {
  canActivate() {
    console.log("AlwaysAuthGuard invoked.. returning false");
    return true;
  }
}