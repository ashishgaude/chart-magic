import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  file: File | null = null; // Variable to store file

  constructor(private router: Router) { }

  ngOnInit() {
  }

   // On file Select
 onChange(event: any) {
  const file: File = event.target.files[0];

  if (file) {
    this.file = file;
  }
}

onUpload() {
  console.log("===========");
  this.router.navigate(['/dashboard']);
  // we will implement this method later
}

}
