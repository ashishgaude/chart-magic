import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { VerticalBarChartComponent } from './charts/vertical-bar-chart/vertical-bar-chart.component';
import { StackedHorizontalBarChartComponent } from './charts/stacked-horizontal-bar-chart/stacked-horizontal-bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { PieChartGridComponent } from './charts/pie-chart-grid/pie-chart-grid.component';
import { PieChartAdvanceComponent } from './charts/pie-chart-advance/pie-chart-advance.component';
import { NormalizedHorizontalBarChartComponent } from './charts/normalized-horizontal-bar-chart/normalized-horizontal-bar-chart.component';

@NgModule({
  declarations: [AppComponent, VerticalBarChartComponent, StackedHorizontalBarChartComponent, PieChartComponent, PieChartGridComponent, PieChartAdvanceComponent, NormalizedHorizontalBarChartComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
