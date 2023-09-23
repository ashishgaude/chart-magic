import { Component, OnInit } from "@angular/core";
import { single } from "./data";

@Component({
  selector: "app-pie-chart-grid",
  templateUrl: "./pie-chart-grid.component.html",
  styleUrls: ["./pie-chart-grid.component.css"],
})
export class PieChartGridComponent implements OnInit {
  constructor() {
    Object.assign(this, { single });
  }
  ngOnInit() {}

  single: any[];
  view: any[] = [500, 400];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ["#5AA454", "#E44D25", "#CFC0BB", "#7aa3e5", "#a8385d", "#aae3f5"],
  };

  onSelect(event) {
    console.log(event);
  }
}
