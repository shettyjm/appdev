import { Component, OnInit, Input } from '@angular/core';

import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public isLoggedIn = false;
  @Input() userName: any;
  public userProfile: KeycloakProfile | null = null;
  constructor(private readonly keycloak: KeycloakService) { }

  public async ngOnInit() {

    console.log("menu initialized log in status " + this.isLoggedIn);
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();

      console.log(JSON.stringify(this.userProfile), this.userProfile);
      this.userName = this.userProfile["firstName"] + " " + this.userProfile["lastName"]
    } else {
      console.log("user not logged in");

    }
  }



  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout();
  }
}
