import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SchoolsTableComponent } from './schools-table/schools-table.component';
import { NavComponent } from './nav/nav.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    SchoolsTableComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTabsModule
  ],
  exports: [
    SchoolsTableComponent,
    NavComponent
  ]
})
export class CoreModule { }
