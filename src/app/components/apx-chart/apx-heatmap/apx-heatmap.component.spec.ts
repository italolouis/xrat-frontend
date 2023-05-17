import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApxHeatmapComponent } from './apx-heatmap.component';

describe('ApxHeatmapComponent', () => {
  let component: ApxHeatmapComponent;
  let fixture: ComponentFixture<ApxHeatmapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApxHeatmapComponent]
    });
    fixture = TestBed.createComponent(ApxHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
