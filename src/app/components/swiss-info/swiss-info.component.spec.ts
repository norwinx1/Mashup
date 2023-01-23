import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwissInfoComponent } from './swiss-info.component';

describe('SwissInfoComponent', () => {
  let component: SwissInfoComponent;
  let fixture: ComponentFixture<SwissInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwissInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwissInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
