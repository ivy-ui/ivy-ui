import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IvyModule } from 'ivy';
import { ButtonModule } from 'ivy/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IvyModule,
    ButtonModule,
    AppRoutingModule
  ],
  exports: [ButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
