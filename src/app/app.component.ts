import { Component } from '@angular/core';
import {ApiService} from "./services/api.service";
import {LoaderService} from "./services/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  municipality = "";
  workplace = "";
  weather: any;
  trafficConnection: any;

  constructor(private api: ApiService, private loaderService: LoaderService) {
  }

  submit(): void {
    this.loaderService.loading = true;
    this.api.getTrafficConnection(this.municipality, this.workplace).subscribe(response => {
      this.trafficConnection = response;
      this.loaderService.loading = false;
    })

    this.loaderService.loading = true;
    this.api.getMunicipality(this.municipality).subscribe(response => {
      this.api.getWeather(response.results[0].latitude, response.results[0].longitude).subscribe(response2 => {
        this.weather = response2;
        this.loaderService.loading = false;
      })
    })
  }
}
