import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import tippy, { hideAll } from "tippy.js";

@Component({
  selector: "app-ag-clickable-cell-renderer",
  templateUrl: "./ag-clickable-cell-renderer.component.html",
  styleUrls: ["./ag-clickable-cell-renderer.component.css"],
})
export class AgClickableCellRendererComponent
  implements AfterViewInit, ICellRendererAngularComp
{
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
  }

  configureTippyInstance() {
    this.tippyInstance.enable();
    this.tippyInstance.show();

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
        instance.unmount();
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
      this.tippyInstance.unmount();
    }
  }

  refresh(rowData): boolean {
    this.togglePopup(rowData);
    return false;
  }
}
