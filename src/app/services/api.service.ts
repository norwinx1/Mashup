import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const body = `{
    "query": [
        {
            "code": "Jahr",
            "selection": {
                "filter": "top",
                "values": [
                    "1"
                ]
            }
        }
    ],
    "response": {
        "format": "json-stat"
    }
}`

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  getWeather(lat: string, long: string): Observable<any> {
    return this.httpClient.get<any>("https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + long + "&hourly=temperature_2m,rain,cloudcover,windspeed_10m,weathercode")
  }

  getTrafficConnections(municipality: string, workplace: string): Observable<any> {
    return this.httpClient.get<any>("http://transport.opendata.ch/v1/connections?from=" + municipality + "&to=" + workplace)
  }

  getPopulation(): Observable<any> {
    return this.httpClient.post("https://www.pxweb.bfs.admin.ch/api/v1/en/px-x-0102030000_101/px-x-0102030000_101.px", body);
  }

  getSwissInfo(): Observable<any> {
    return this.httpClient.get("https://sms.bfs.admin.ch/WcfBFSSpecificService.svc/AnonymousRest/communes/levels?startPeriod=01-01-2018&endPeriod=01-01-2018&useBfsCode=false&labelLanguages=de");
  }
}
