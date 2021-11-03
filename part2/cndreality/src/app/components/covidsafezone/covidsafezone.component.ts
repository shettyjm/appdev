import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { RestServiceProviderService } from 'src/app/services/rest-service-provider.service';
import { Employee } from 'src/models/employees';

@Component({
  selector: 'app-covidsafezone',
  templateUrl: './covidsafezone.component.html',
  styleUrls: ['./covidsafezone.component.css']
})
export class CovidsafezoneComponent implements OnInit {

  

   employee: Array<Employee> = [];
   token :string = '';

  constructor(private readonly keycloak: KeycloakService,
     private employeeService: RestServiceProviderService) { }

  
  ngOnInit(): void {

    // this.roles = this.keycloak.getUserRoles();
    // console.log("doctors component invoked");
    // this.keycloak.loadUserProfile().then(profile => {
    //   this.username = `${profile.firstName} ${profile.lastName}`;
    //   this.message = `As a member of ${this.roles[0]} group, here are the information ou are authorized to view`

    // });

    this.keycloak.getToken().then(token => {
      console.log('token', token);
      this.token = token;
    });
    this.loadEmployess()
  }
  // Get doctos list
  loadEmployess() {
    console.log("loading")
    return this.employeeService.getEmployees(this.token).subscribe((data: Employee[]) => {
      this.employee = data;
      console.log(data);
    })
  }

  loadActualDoctors() {
    console.log("implement to parse real npi based provider here");
  }


}
