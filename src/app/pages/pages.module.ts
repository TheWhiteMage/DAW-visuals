import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MainPageModule } from './main';


@NgModule({
  declarations: [],
  imports: [
    MainPageModule,
    BrowserModule,
  ],
  providers: [],
  exports: [MainPageModule],
  bootstrap: []
})
export class PagesModule { }
