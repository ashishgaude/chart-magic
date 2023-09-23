import { Component, OnInit } from "@angular/core";
import { single } from "./data";

@Component({
  selector: "app-vertical-bar-chart",
  templateUrl: "./vertical-bar-chart.component.html",
  styleUrls: ["./vertical-bar-chart.component.css"],
})
export class VerticalBarChartComponent implements OnInit {
  constructor() {
    Object.assign(this, { single });
  }

  ngOnInit() {}

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Country";
  showYAxisLabel = true;
  yAxisLabel = "Population";

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"],
  };

  onSelect(event) {
    console.log(event);
  }
}
