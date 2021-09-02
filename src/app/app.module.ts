import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentasTecnoModule } from './ventas-tecno/ventas-tecno.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VentasTecnoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
