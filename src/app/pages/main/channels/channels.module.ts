import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChannelsComponent } from './channels.component';
import { ChannelComponent } from './channel/channel.component';


@NgModule({
  declarations: [
    ChannelsComponent,
    ChannelComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [ChannelsComponent]
})
export class ChannelsModule { }
