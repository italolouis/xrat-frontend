import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApxBarChartComponent } from './components/apx-chart/apx-bar-chart/apx-bar-chart.component';
import { ApxHeatmapComponent } from './components/apx-chart/apx-heatmap/apx-heatmap.component';
import { ApxLineChartComponent } from './components/apx-chart/apx-line-chart/apx-line-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from "@angular/material/input";
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from "@angular/material/icon";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgxDatatableComponent } from './components/ngx-datatable/ngx-datatable.component';
import {NgApexchartsModule} from "ng-apexcharts";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [
    AppComponent,
    ApxBarChartComponent,
    ApxHeatmapComponent,
    ApxLineChartComponent,
    DashboardComponent,
    NgxDatatableComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatFormFieldModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
        NgApexchartsModule,
        NgxDatatableModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
