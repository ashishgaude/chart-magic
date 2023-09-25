import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

import { FileUploadService } from "src/app/services/file-upload.service";

@Component({
  selector: "app-stacked-vertical-bar-chart",
  templateUrl: "./stacked-vertical-bar-chart.component.html",
  styleUrls: ["./stacked-vertical-bar-chart.component.css"],
})
export class StackedVerticalBarChartComponent implements OnInit {
  private rawData = [];
  constructor(private readonly fileUploadService: FileUploadService) {}

  ngOnInit() {
    const data = this.fileUploadService.getData();
    this.rawData = (data && data.payload && data.payload.resultsList) || [];
    const output = this.formatData(this.rawData);
    Object.assign(this, { multi: output });
  }

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

  formatData(data) {
    const output = [];
    const grouped = _.groupBy(data, "product");
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
