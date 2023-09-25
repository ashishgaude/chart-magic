import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

import { FileUploadService } from "src/app/services/file-upload.service";

@Component({
  selector: "app-normalized-horizontal-bar-chart",
  templateUrl: "./normalized-horizontal-bar-chart.component.html",
  styleUrls: ["./normalized-horizontal-bar-chart.component.css"],
})
export class NormalizedHorizontalBarChartComponent implements OnInit {
  private rawData = [];

  constructor(private readonly fileUploadService: FileUploadService) {}

  ngOnInit() {
    const data = this.fileUploadService.getData();
    this.rawData = (data && data.payload && data.payload.resultsList) || [];
    const output = this.formatData(this.rawData);
    Object.assign(this, { multi: output });
  }

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

  formatData(data) {
    const output = [];
    const grouped = _.groupBy(data, "category");
    for (let group in grouped) {
      const obj = {};
      obj["name"] = group;
      obj["series"] = [];
      const grouopedByAttitude = _.groupBy(grouped[group], "attitude");
      for (let s in grouopedByAttitude) {
        let objAttidute = {};
        objAttidute["name"] = s;
        objAttidute["value"] = grouopedByAttitude[s].length;
        obj["series"].push(objAttidute);
      }
      output.push(obj);
    }
    return output;
  }
}
