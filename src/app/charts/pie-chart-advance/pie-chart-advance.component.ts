import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

import { FileUploadService } from "src/app/services/file-upload.service";

@Component({
  selector: "app-pie-chart-advance",
  templateUrl: "./pie-chart-advance.component.html",
  styleUrls: ["./pie-chart-advance.component.css"],
})
export class PieChartAdvanceComponent implements OnInit {
  private rawData = [];
  constructor(private readonly fileUploadService: FileUploadService) {}

  ngOnInit() {
    const data = this.fileUploadService.getData();
    this.rawData = (data && data.payload && data.payload.resultsList) || [];
    const output = this.formatData(this.rawData);
    Object.assign(this, { single: output });
  }

  single: any[];
  view: any[] = [600, 300];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C"],
  };

  onSelect(data): void {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }

  formatData(data) {
    const grouped = _.groupBy(data, "attitude");
    const output = [];
    for (let key of Object.keys(grouped)) {
      let obj = { name: null, value: 0 };
      obj.name = key;
      obj.value = grouped[key].length;
      output.push(obj);
    }
    return output;
  }
}
