import { Component, Input } from '@angular/core';
import { TableData } from './table-data.model';

@Component({
  selector: 'pm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() tableData!: TableData;
}