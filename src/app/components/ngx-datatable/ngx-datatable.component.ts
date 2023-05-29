import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../../service/dashboard.service";

@Component({
  selector: 'app-ngx-datatable',
  templateUrl: './ngx-datatable.component.html',
  styleUrls: ['./ngx-datatable.component.scss']
})
export class NgxDatatableComponent implements OnInit{
  rows: any = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company', sortable: false }];

  ColumnMode = 'force';

  constructor(
    private  dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.dashboardService.getDadosTable().subscribe(response =>
      this.rows = response
    );
  }

}
