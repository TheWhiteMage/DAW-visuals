import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MainPageComponent } from './main.component';
import { MixTabModule } from './mix-tab';
import { FileSelectModule } from './file-select';
import { ChannelsModule } from './channels';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    MixTabModule,
    FileSelectModule,
    ChannelsModule
  ],
  exports: [
    MainPageComponent
  ],
  providers: [],
  bootstrap: [MainPageComponent]
})
export class MainPageModule { }
