import { Component, OnInit } from "@angular/core";
import { tabledata } from "./tabledata";
// import { GridOptions, RowNode } from 'ag-grid/main';
import { AgClickableCellRendererComponent } from "../ag-clickable-cell-renderer/ag-clickable-cell-renderer.component";
import { FileUploadService } from "../services/file-upload.service";

@Component({
  selector: "app-ag-table",
  templateUrl: "./ag-table.component.html",
  styleUrls: ["./ag-table.component.css"],
})
export class AgTableComponent implements OnInit {
  private gridApi: any;
  private frameworkComponents;
  private rawData = [];

  rowData = [];

  constructor(private readonly fileUploadService: FileUploadService) {
    this.frameworkComponents = {
      childMessageRenderer: AgClickableCellRendererComponent,
    };
  }

  ngOnInit() {
    const data = this.fileUploadService.getData();
    this.rawData = (data && data.payload && data.payload.resultsList) || [];
    this.rowData = this.rawData;
  }

  columnDefs = [
    { headerName: "Feedback Id", field: "feedBackId" },
    { headerName: "Record Date", field: "recordDate" },
    { headerName: "Customer Name", field: "customerName" },
    { headerName: "Customer Email", field: "customerEmail" },
    { headerName: "NPS", field: "initiaINPS" },
    { headerName: "Atttiude", field: "attitude" },
    { headerName: "Category", field: "category" },
    { headerName: "Product", field: "product" },
    { headerName: "Keywods", field: "keywords" },
    { headerName: "Insights", field: "insights" },
    { headerName: "Suggestive Action", field: "suggestiveAction" },
    // { headerName: "Follow Up Status", field: "FollowUpStatus" }, //DONT HAVE COLUMN FOR THIS IN JSON
    {
      headerName: "Action",
      field: "Action",
      cellRenderer: "childMessageRenderer",
    },
  ];

  methodFromParent(cell) {
    alert("Parent Component Method from " + cell + "!");
  }
  defaultPageSize = 5;

   gridOptions = {
    defaultColDef: {
        editable: true,
        enableRowGroup: true,
        enablePivot: true,
        enableValue: true,
        sortable: true,
        resizable: true,
        filter: true
    },
    suppressRowClickSelection: true,
    groupSelectsChildren: true,
    debug: true,
    rowSelection: 'multiple',
    rowGroupPanelShow: 'always',
    pivotPanelShow: 'always',
    enableRangeSelection: true,
    columnDefs: this.columnDefs,
    pagination: true,
    paginationPageSize: 10,
    paginationNumberFormatter: function(params) {
        return '[' + params.value.toLocaleString() + ']';
    }
};


  onPageSizeChanged(event: any) {
    // this.gridApi.paginationSetPageSize(Number(event.target.value));
    // var value = document.getElementById('page-size').value;
    // gridOptions.api.paginationSetPageSize(Number(value));
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
