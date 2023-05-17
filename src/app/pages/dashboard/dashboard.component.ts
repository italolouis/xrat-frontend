import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dropDownData: any[] = [
    { value: 1, label: 'APEX CHART' },
    { value: 3, label: 'DATATABLE' },
  ];

  public visibleApexChart: boolean = true;
  public visibleNgxChart: boolean = false;
  public visibleDatatable: boolean = false;
  constructor() {}
  ngOnInit(): void {}

  onOptionsSelected(value: string) {
    this.visibleApexChart = false;
    this.visibleNgxChart = false;
    this.visibleDatatable = false;

    if (value === '1') {
      this.visibleApexChart = true;
    } else if (value === '2') {
      this.visibleNgxChart = true;
    } else if (value === '3') {
      this.visibleDatatable = true;
    }
  }
}
