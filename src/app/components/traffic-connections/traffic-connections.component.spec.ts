import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficConnectionsComponent } from './traffic-connections.component';

describe('TrafficConnectionsComponent', () => {
  let component: TrafficConnectionsComponent;
  let fixture: ComponentFixture<TrafficConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficConnectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
