import { Component } from '@angular/core';
import { TableData } from '../../shared/components/table/table-data.model';

@Component({
  selector: 'pm-schools-table',
  templateUrl: './schools-table.component.html',
  styleUrls: ['./schools-table.component.scss']
})
export class SchoolsTableComponent {
  schoolTableData: TableData = {
    headerRow: ['School Name', 'Grade'],
    dataRows: [
      ['School 1', 'A'],
      ['School 2', 'B'],
      // Add more rows as needed
    ]
  };
}
