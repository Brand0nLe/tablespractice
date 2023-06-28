import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SchoolsTableComponent } from './schools-table/schools-table.component';

@NgModule({
  declarations: [
    SchoolsTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SchoolsTableComponent
  ]
})
export class CoreModule { }
