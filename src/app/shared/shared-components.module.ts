import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer';
import { NavbarComponent } from './navbar';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
  ],
  providers: []
})

export class SharedComponentsModule { }
