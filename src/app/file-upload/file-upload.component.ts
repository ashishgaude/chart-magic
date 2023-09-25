import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FileUploadService } from "../services/file-upload.service";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"],
})
export class FileUploadComponent implements OnInit {
  file: File | null = null; // Variable to store file
  jsonData: any;

  constructor(
    private router: Router,
    private readonly fileUploadService: FileUploadService
  ) {}

  ngOnInit() {}

  // On file Select
  onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.file = file;
      let reader = new FileReader();
      reader.onload = (event: any) => {
        const str = event.target.result;
        this.jsonData = JSON.parse(str as string);
      };
      reader.readAsText(this.file);
    }
  }

  onUpload() {
    this.fileUploadService.saveData(this.jsonData);
    this.router.navigate(["/dashboard"]);
    // we will implement this method later
  }
}
