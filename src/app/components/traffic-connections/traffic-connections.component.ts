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
      c.platform = connection.from.platform;
      c.departure = connection.from.departure;
      c.arrival = connection.to.arrival;
      this.dataSource.push(c);
    }
  }

}
