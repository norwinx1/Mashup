import { Component } from '@angular/core';
import {ApiService} from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  municipality = "";
  workplace = "";

  constructor(private api: ApiService) {
  }

  submit(): void {
    this.api.getTrafficConnection(this.municipality, this.workplace).subscribe(response => {
      console.log(response);
    })
    this.api.getMunicipality(this.municipality).subscribe(response => {
      console.log(response);
      this.api.getWeather("", "").subscribe(response2 => {
        console.log(response2);
      })
    })
  }
}
