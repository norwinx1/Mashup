import {Component} from '@angular/core';
import {ApiService} from "./services/api.service";
import {LoaderService} from "./services/loader.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  municipality = "Zürich";
  workplace = "Winterthur";
  weatherMunicipality: any;
  weatherWorkplace: any;
  trafficConnections: any;
  population: any;

  constructor(private api: ApiService, private loaderService: LoaderService) {
  }

  submit(): void {
    this.loaderService.loading = true;

    this.api.getTrafficConnections(this.municipality, this.workplace).subscribe(response => {
      this.trafficConnections = response;
      let responseWeather = forkJoin([this.api.getWeather(response.from.coordinate.x, response.from.coordinate.y), this.api.getWeather(response.to.coordinate.x, response.to.coordinate.y), this.api.getPopulation()])
      responseWeather.subscribe(responseList => {
        this.weatherMunicipality = responseList[0];
        this.weatherWorkplace = responseList[1];
        this.population = responseList[2];
        this.loaderService.loading = false;
      })
    })
  }
}
