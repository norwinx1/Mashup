import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-traffic-connections',
  templateUrl: './traffic-connections.component.html',
  styleUrls: ['./traffic-connections.component.css']
})
export class TrafficConnectionsComponent implements OnInit {

  @Input() trafficConnections: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
