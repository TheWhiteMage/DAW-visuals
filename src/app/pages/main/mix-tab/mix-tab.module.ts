import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MixTabComponent } from './mix-tab.component';


@NgModule({
  declarations: [
    MixTabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MixTabComponent]
})
export class MixTabModule { }
