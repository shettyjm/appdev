import { Component, OnInit } from '@angular/core';
import { RestServiceProviderService } from 'src/app/services/rest-service-provider.service';
import { City } from 'src/models/cities';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cityrankscors',
  templateUrl: './cityrankscors.component.html',
  styleUrls: ['./cityrankscors.component.css']
})
export class CityrankscorsComponent implements OnInit {

  cities: City[] = [];
  token: string = '';

  constructor(
    private citiService: RestServiceProviderService, private _snackBar: MatSnackBar) { }


  ngOnInit(): void {


    this.loadCitiesCORSFromBackend();
  }

  loadCitiesCORSFromBackend() {
    console.log("loading cities from CORS restricted api");
    return this.citiService.getCORSCities().subscribe((data: City[]) => {
      this.cities = data;
      console.log(this.cities);
    }, (err) => {
      console.error("error occured", err);
      this._snackBar.open('Error Occured ', 'Error');
    })
  }

}
