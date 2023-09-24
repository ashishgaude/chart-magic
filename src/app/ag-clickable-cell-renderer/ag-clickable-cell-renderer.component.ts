import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from "@angular/core";
import tippy, { hideAll } from "tippy.js";

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

  @ViewChild("content") container;

  @ViewChild("trigger") button;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.tippyInstance = tippy(this.button.nativeElement);
    this.tippyInstance.disable();
  }

  agInit(params) {
    this.params = params;
    console.log("params::::", params);
  }

  onClickHandler() {
    console.log("++++++>", this.params);
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
