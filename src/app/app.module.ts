import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchoolsTableComponent } from './core/schools-table/schools-table.component';
import { BrandonComponent } from './core/brandon/brandon.component';
import { CuongComponent } from './cuong/cuong.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolsTableComponent,
    BrandonComponent,
    CuongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
