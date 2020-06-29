import { TabletsService } from './tablets.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabletsComponent } from './tablets/tablets.component';


@NgModule({
  declarations: [
    AppComponent,
    TabletsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TabletsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
