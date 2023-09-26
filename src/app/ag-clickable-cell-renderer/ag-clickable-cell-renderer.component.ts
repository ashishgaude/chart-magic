import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from "@angular/core";
import tippy, { hideAll } from "tippy.js";
import { FileUploadService } from "../services/file-upload.service";

@Component({
  selector: "app-ag-clickable-cell-renderer",
  templateUrl: "./ag-clickable-cell-renderer.component.html",
  styleUrls: ["./ag-clickable-cell-renderer.component.css"],
})
export class AgClickableCellRendererComponent implements AfterViewInit {
  private params;
  private isOpen = false;
  private tippyInstance;

  DataToRender = null;

  statuses = ["Open", "Processing", "Closed", "Not Applicable"];
  assignee = "";
  selectedStatus = this.statuses[0];
  comments = "";

  @ViewChild("content") container;

  @ViewChild("trigger") button;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private readonly fileUploadService: FileUploadService
  ) {}

  ngAfterViewInit(): void {
    this.tippyInstance = tippy(this.button.nativeElement);
    this.tippyInstance.disable();
  }

  agInit(params) {
    this.params = params;
  }

  getSelectedValue(event) {
    this.selectedStatus = event.target.value;
  }

  onClickHandler() {
    console.log("++++++>", this.params);
    this.fileUploadService.saveRow(
      this.params.data.feedBackId,
      this.assignee,
      this.selectedStatus,
      this.comments
    );
    this.tippyInstance.hide(); // NOTE: try using unmout instead of hide
  }

  configureTippyInstance() {
    this.tippyInstance.enable();
    this.tippyInstance.show();

    // note: the following event handlers are not properly working due to version compatibility issues.
    this.tippyInstance.setProps({
      trigger: "manual",
      placement: "right",
      arrow: false,
      interactive: true,
      appendTo: document.body,
      hideOnClick: false,
      onShow: (instance) => {
        hideAll({ exclude: instance });
      },
      onClickOutside: (instance, event) => {
        this.isOpen = false;
        instance.hide();
      },
    });
  }

  togglePopup(rowData) {
    this.DataToRender = rowData;
    this.assignee = rowData.assignee;
    this.selectedStatus = rowData.followUpStatus;
    this.comments = rowData.comments;
    this.isOpen = !this.isOpen;
    this.changeDetector.detectChanges();
    if (this.isOpen) {
      this.configureTippyInstance();
      this.tippyInstance.setContent(this.container.nativeElement);
    } else {
      this.tippyInstance.hide();
    }
  }

  refresh(rowData): boolean {
    this.togglePopup(rowData);
    return false;
  }
}
