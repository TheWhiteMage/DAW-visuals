import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FileSelectComponent } from './file-select.component';


@NgModule({
  declarations: [
    FileSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FileSelectComponent]
})
export class FileSelectModule { }
