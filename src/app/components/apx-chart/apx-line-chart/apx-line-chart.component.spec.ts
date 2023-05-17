import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApxLineChartComponent } from './apx-line-chart.component';

describe('ApxLineChartComponent', () => {
  let component: ApxLineChartComponent;
  let fixture: ComponentFixture<ApxLineChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApxLineChartComponent]
    });
    fixture = TestBed.createComponent(ApxLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
