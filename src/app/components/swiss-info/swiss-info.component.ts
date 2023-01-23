import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-swiss-info',
  templateUrl: './swiss-info.component.html',
  styleUrls: ['./swiss-info.component.css']
})
export class SwissInfoComponent implements OnInit {
  @Input() population: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
