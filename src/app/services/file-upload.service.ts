import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FileUploadService {
  private chartData: any;
  constructor() {}

  saveData(data: any) {
    const rawData = (data && data.payload && data.payload.resultsList) || [];
    localStorage.setItem("chartData", JSON.stringify(rawData));
    this.chartData = rawData;
  }

  getData() {
    const dataInCache = localStorage.getItem("chartData");
    return this.chartData || (dataInCache && JSON.parse(dataInCache)) || [];
  }

  saveRow(feedBackId, assignee, status, comments) {
    const data = this.getData();
    const updatedData = data.map((item) => {
      if (item.feedBackId === feedBackId) {
        item.assignee = assignee;
        item.followUpStatus = status;
        item.comments = comments;
      }
      return item;
    });
    this.saveData({ payload: { resultsList: updatedData } });
  }
}
