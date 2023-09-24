import { Component, OnInit } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: "app-ag-clickable-cell-renderer",
  templateUrl: "./ag-clickable-cell-renderer.component.html",
  styleUrls: ["./ag-clickable-cell-renderer.component.css"],
})
export class AgClickableCellRendererComponent
  implements ICellRendererAngularComp
{
  constructor() {}

  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  public invokeParentMethod() {
    this.params.context.componentParent.methodFromParent(
      `Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`
    );
  }

  refresh(): boolean {
    return false;
  }
}
