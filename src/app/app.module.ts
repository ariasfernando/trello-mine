import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
