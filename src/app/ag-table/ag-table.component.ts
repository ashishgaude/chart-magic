import { Component, OnInit } from "@angular/core";
import { tabledata } from "./tabledata";
import { AgClickableCellRendererComponent } from "../ag-clickable-cell-renderer/ag-clickable-cell-renderer.component";

@Component({
  selector: "app-ag-table",
  templateUrl: "./ag-table.component.html",
  styleUrls: ["./ag-table.component.css"],
})
export class AgTableComponent implements OnInit {
  private gridApi: any;
  private frameworkComponents;

  constructor() {
    this.frameworkComponents = {
      childMessageRenderer: AgClickableCellRendererComponent,
    };
  }

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
    {
      headerName: "Action",
      field: "Action",
      cellRenderer: "childMessageRenderer",
    },
  ];

  rowData = tabledata;

  methodFromParent(cell) {
    alert("Parent Component Method from " + cell + "!");
  }
  defaultPageSize = 10;

  onPageSizeChanged(event: any) {
    this.gridApi.paginationSetPageSize(Number(event.target.value));
  }

  onCellClicked(params) {
    if (
      params.event.target.dataset.action == "toggle" &&
      params.column.getColId() == "Action"
    ) {
      const cellRendererInstances = params.api.getCellRendererInstances({
        rowNodes: [params.node],
        columns: [params.column],
      });
      if (cellRendererInstances.length > 0) {
        const instance = cellRendererInstances[0];
        instance.refresh(params.data);
      }
    }
  }
}
