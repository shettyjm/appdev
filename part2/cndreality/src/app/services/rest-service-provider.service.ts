import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Observable,throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { City } from 'src/models/cities';
import { Employee } from 'src/models/employees';

@Injectable({
  providedIn: 'root'
})
export class RestServiceProviderService {

  rootURL: string;
  cityRootUrl: string;
  cityBackendUrl : string;

   headers= new HttpHeaders()
  //.set('content-type', 'application/json')
  //.set('Access-Control-Allow-Origin', '*');
  
  constructor(private http: HttpClient,private readonly keycloak: KeycloakService) { 
    this.rootURL = environment.threescaleApiUrl;
    this.cityRootUrl = environment.threescaleApiCityUrl;
    this.cityBackendUrl = environment.corserrorpi;
    //" http://localhost:3000"


  }


  
  getCities(): Observable<[City]> {
    console.log("get cities from backend");
    return this.http.get<[City]>(`${this.cityRootUrl}/cityrankings?user_key=905fe060a3084ce5731f16609dd47239`,{ headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getCORSCities(): Observable<[City]> {
    console.log("get cities from backend");
    return this.http.get<[City]>(`${this.cityBackendUrl}/cityrankings`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getEmployees(token:string): Observable<[Employee]> {
    this.headers.set("Authorization","Bearer "+token)
    return this.http.get<[Employee]>(`${this.rootURL}/employees`,{ headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getEmployee(id:any,token:string): Observable<Employee> {
    this.headers.set("Authorization","Bearer "+token)
    return this.http.get<Employee>(`${this.rootURL}/employees/1`,{ headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
