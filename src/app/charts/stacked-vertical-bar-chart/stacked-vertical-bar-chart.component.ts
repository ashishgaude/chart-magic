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
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = "Country";
  showYAxisLabel: boolean = true;
  yAxisLabel: string = "Population";
  animations: boolean = true;

  colorScheme = {
    domain: ["#5AA454", "#C7B42C", "#AAAAAA"],
  };
  onSelect(event) {
    console.log(event);
  }
}
