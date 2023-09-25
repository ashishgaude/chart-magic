import { Component, OnInit } from "@angular/core";

import { multi } from "./data";

@Component({
  selector: "app-stacked-vertical-bar-chart",
  templateUrl: "./stacked-vertical-bar-chart.component.html",
  styleUrls: ["./stacked-vertical-bar-chart.component.css"],
})
export class StackedVerticalBarChartComponent implements OnInit {
  constructor() {
    Object.assign(this, { multi });
  }

  ngOnInit() {}

  multi: any[];
  view: any[] = [600, 300];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = "";
  showYAxisLabel: boolean = true;
  yAxisLabel: string = "Product";
  animations: boolean = true;

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"],
  };
  onSelect(event) {
    console.log(event);
  }
}
