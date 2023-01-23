import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() weather: any;

  constructor() { }

  ngOnInit(): void {
  }

  getWeatherIcon(): string {
    let weatherCode = this.weather.hourly.weathercode[0];
    switch (weatherCode) {
      case 0:
        return 'sun-solid';
      case 1:
      case 2:
      case 3:
        return 'cloud-sun-solid';
      case 45:
      case 48:
        return 'cloud-solid';
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
        return 'cloud-sun-rain-solid';
      case 61:
      case 63:
      case 65:
      case 66:
      case 67:
        return 'cloud-rain-solid';
      case 71:
      case 73:
      case 75:
      case 77:
        return 'snowflake-solid';
      case 80:
      case 81:
      case 82:
      case 85:
      case 86:
        return 'cloud-showers-heavy-solid';
      case 95:
      case 96:
      case 99:
        return 'cloud-bolt-solid';
      default:
        return 'cloud-solid';
    }
  }
}
