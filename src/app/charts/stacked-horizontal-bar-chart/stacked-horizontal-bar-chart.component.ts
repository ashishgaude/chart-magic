import { Component, OnInit } from "@angular/core";
import { multi } from "./data";

@Component({
  selector: "app-stacked-horizontal-bar-chart",
  templateUrl: "./stacked-horizontal-bar-chart.component.html",
  styleUrls: ["./stacked-horizontal-bar-chart.component.css"],
})
export class StackedHorizontalBarChartComponent implements OnInit {
  constructor() {
    Object.assign(this, { multi });
  }
  ngOnInit() {}

  multi: any[];
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = "Country";
  showYAxisLabel: boolean = true;
  xAxisLabel: string = "Population";

  colorScheme = {
    domain: ["#5AA454", "#C7B42C", "#AAAAAA"],
  };

  onSelect(event) {
    console.log(event);
  }
}
