import { Component, OnInit } from '@angular/core';
import { RestServiceProviderService } from 'src/app/services/rest-service-provider.service';
import { City } from 'src/models/cities';


@Component({
  selector: 'app-cityranks',
  templateUrl: './cityranks.component.html',
  styleUrls: ['./cityranks.component.css']
})
export class CityranksComponent implements OnInit {

  cities: City[] = [];
  token :string = '';

 constructor(
    private citiService: RestServiceProviderService) { }

 
 ngOnInit(): void {

   // this.roles = this.keycloak.getUserRoles();
   // console.log("doctors component invoked");
   // this.keycloak.loadUserProfile().then(profile => {
   //   this.username = `${profile.firstName} ${profile.lastName}`;
   //   this.message = `As a member of ${this.roles[0]} group, here are the information ou are authorized to view`

   // });

  //  this.keycloak.getToken().then(token => {
  //    console.log('token', token);
  //    this.token = token;
  //  });
   this.loadCitiesFromBackend();
 }
 // Get doctos list
 loadCities() {
   console.log("loading cities from backend")
   return this.citiService.getCities().subscribe((data: City[]) => {
     console.log(this.cities)
     this.cities = data;
     console.log(this.cities);
   })
 }

 loadCitiesFromBackend() {
  console.log("loading cities from backend directly");
  return this.citiService.getCities().subscribe((data: City[]) => {
    this.cities = data;
    console.log(this.cities);
  })
 }
}
