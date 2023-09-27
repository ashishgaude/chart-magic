import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FileUploadService {
  private chartData: any;
  private subject = new Subject<any>();
  constructor() {
    this.loadData();
  }

  saveData(data: any) {
    const rawData = (data && data.payload && data.payload.resultsList) || [];
    localStorage.setItem("chartData", JSON.stringify(rawData));
    this.chartData = rawData;
    this.subject.next(rawData);
  }

  loadData() {
    const dataInCache = localStorage.getItem("chartData");
    let dataToReturn;
    if (this.chartData && this.chartData.length) {
      dataToReturn = this.chartData;
    } else if (dataInCache) {
      dataToReturn = JSON.parse(dataInCache);
    } else dataToReturn = [];
    this.subject.next(dataToReturn);
    return dataToReturn;
  }

  saveRow(feedBackId, assignee, status, comments) {
    const data = this.loadData();
    const updatedData = data.map((item) => {
      if (item.feedBackId === feedBackId) {
        item.assignee = assignee;
        item.followUpStatus = status;
        item.comments = comments;
      }
      return item;
    });
    this.saveData({ payload: { resultsList: updatedData } });
    this.subject.next(updatedData);
  }

  getTableData(): Observable<any> {
    return this.subject.asObservable();
  }
}
