import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FileUploadService {
  private chartData: any;
  constructor() {}

  saveData(data: any) {
    localStorage.setItem("chartData", JSON.stringify(data));
    this.chartData = data;
  }

  getData() {
    const dataInCache = localStorage.getItem("chartData");
    return this.chartData || (dataInCache && JSON.parse(dataInCache)) || [];
  }
}
