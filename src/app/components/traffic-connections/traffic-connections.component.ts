import {Component, Input, OnInit} from '@angular/core';
import {Connection} from "../../models/connection";

@Component({
  selector: 'app-traffic-connections',
  templateUrl: './traffic-connections.component.html',
  styleUrls: ['./traffic-connections.component.css']
})
export class TrafficConnectionsComponent implements OnInit {

  @Input() trafficConnections: any;
  displayedColumns: string[] = ['train', 'platform', 'departure', 'arrival'];
  dataSource: Connection[] = [];

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < this.trafficConnections.connections.length; i++) {
      let connection = this.trafficConnections.connections[i];
      let c = {} as Connection;
      c.train = connection.products[0];
      c.platform = this.cleanPlatform(connection.from.platform);
      c.departure = connection.from.departure;
      c.arrival = connection.to.arrival;
      this.dataSource.push(c);
    }
  }

  /**
   * Cleans the platform from ! at the end of the string.
   * The exclamation mark is used to determine if the platform changed, but it's not used here.
   * @param platform the platform string to clean
   * @return the cleaned platform string
   */
  cleanPlatform(platform: string): string {
    return platform.endsWith("!") ? platform.substring(0, platform.length - 1) : platform;
  }

}
