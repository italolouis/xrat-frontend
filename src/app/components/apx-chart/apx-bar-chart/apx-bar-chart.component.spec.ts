import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApxBarChartComponent } from './apx-bar-chart.component';

describe('ApxBarChartComponent', () => {
  let component: ApxBarChartComponent;
  let fixture: ComponentFixture<ApxBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApxBarChartComponent]
    });
    fixture = TestBed.createComponent(ApxBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
