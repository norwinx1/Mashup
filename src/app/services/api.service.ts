import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  getMunicipality(municipality: string): Observable<any> {
    return this.httpClient.get<any>("https://geocoding-api.open-meteo.com/v1/search?name=" + municipality);
  }

  getWeather(lat: string, long: string): Observable<any> {
    return this.httpClient.get<any>("https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + long + "&hourly=temperature_2m,rain,cloudcover,windspeed_10m")
  }

  getTrafficConnections(municipality: string, workplace: string): Observable<any> {
    return this.httpClient.get<any>("http://transport.opendata.ch/v1/connections?from=" + municipality + "&to=" + workplace)
  }
}
