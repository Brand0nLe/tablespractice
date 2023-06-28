import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
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
    RouterModule,
    CoreModule
  ],
  exports: [
    HomePageComponent,
    SchoolsPageComponent,
  ]
})
export class ViewsModule { }