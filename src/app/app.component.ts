import {Component} from '@angular/core';
import {ApiService} from "./services/api.service";
import {LoaderService} from "./services/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  municipality = "Zürich";
  workplace = "Winterthur";
  weather: any;
  trafficConnections: any;

  constructor(private api: ApiService, private loaderService: LoaderService) {
  }

  submit(): void {
    this.loaderService.loading = true;
    let trafficConnectionsLoading = true;
    let weatherLoading = true;

    this.api.getTrafficConnections(this.municipality, this.workplace).subscribe(response => {
      this.trafficConnections = response;
      trafficConnectionsLoading = false;
      if (!trafficConnectionsLoading && !weatherLoading) {
        this.loaderService.loading = false;
      }
    })

    this.api.getMunicipality(this.municipality).subscribe(response => {
      this.api.getWeather(response.results[0].latitude, response.results[0].longitude).subscribe(response2 => {
        this.weather = response2;
        weatherLoading = false;
        if (!trafficConnectionsLoading && !weatherLoading) {
          this.loaderService.loading = false;
        }
      })
    })
  }
}
