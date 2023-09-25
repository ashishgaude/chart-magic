import { Component, OnInit } from "@angular/core";
import { multi } from "./data";

@Component({
  selector: "app-normalized-horizontal-bar-chart",
  templateUrl: "./normalized-horizontal-bar-chart.component.html",
  styleUrls: ["./normalized-horizontal-bar-chart.component.css"],
})
export class NormalizedHorizontalBarChartComponent implements OnInit {
  constructor() {
    Object.assign(this, { multi });
  }

  ngOnInit() {}

  multi: any[];
  view: any[] = [600, 270];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = "Category";
  showYAxisLabel: boolean = true;
  xAxisLabel: string = "";

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"],
  };

  onSelect(event) {
    console.log(event);
  }
}
