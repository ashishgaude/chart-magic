import { Component, OnInit } from "@angular/core";
import { tabledata } from "./tabledata";

@Component({
  selector: "app-ag-table",
  templateUrl: "./ag-table.component.html",
  styleUrls: ["./ag-table.component.css"],
})
export class AgTableComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  columnDefs = [
    { headerName: "Feedback Id", field: "FeedbackId" },
    { headerName: "Record Date", field: "RecordDate" },
    { headerName: "Customer Name", field: "CustomerName" },
    { headerName: "Customer Email", field: "CustomerEmail" },
    { headerName: "NPS", field: "NPS" },
    { headerName: "Atttiude", field: "Atttiude" },
    { headerName: "Category", field: "Category" },
    { headerName: "Product", field: "Product" },
    { headerName: "Keywods", field: "Keywods" },
    { headerName: "Insights", field: "Insights" },
    { headerName: "Suggestive Action", field: "SuggestiveAction" },
    { headerName: "Follow Up Status", field: "FollowUpStatus" },
    { headerName: "Action", field: "Action" },
  ];

  rowData = tabledata;
}
