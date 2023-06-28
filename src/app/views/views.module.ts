import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SchoolsPageComponent } from './schools-page/schools-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SchoolsPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    SchoolsPageComponent,
  ]
})
export class ViewsModule { }