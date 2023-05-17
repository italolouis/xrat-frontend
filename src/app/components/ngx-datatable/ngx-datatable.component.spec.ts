import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatatableComponent } from './ngx-datatable.component';

describe('NgxDatatableComponent', () => {
  let component: NgxDatatableComponent;
  let fixture: ComponentFixture<NgxDatatableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxDatatableComponent]
    });
    fixture = TestBed.createComponent(NgxDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
