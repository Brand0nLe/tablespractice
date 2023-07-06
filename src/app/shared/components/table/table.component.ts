import {
  EventEmitter,
  Output,
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SchoolsTable } from '@core/interfaces/schools-table';
import { PAGE_SIZE } from '@core/constants/global-constants';

@Component({
  selector: 'pm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Output() editModal: EventEmitter<number> = new EventEmitter<number>();
 
  constructor(){}
  totalPages: number = 0;
  isFirstPage: boolean = true;
  isLastPage: boolean = true;

  @Input() data: (
    | SchoolsTable

  )[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() columnHeaders: string[] = [];
  @Input() showFileIcon: boolean = false;
  @Output() actionEvent = new EventEmitter<any>();

  dataSource = new MatTableDataSource<any>();
  currentPage = 1;
  pageSize = PAGE_SIZE;
  fullDataSet: (SchoolsTable)[] = [];

  actionClick(value: any, key: any){
    this.actionEvent.emit({key: key, value: value});
  }

  ngOnInit(): void {
    this.fullDataSet = this.data;
    this.calculateTableData();
    this.updateTableData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.fullDataSet = this.data;
      this.calculateTableData();
      this.updateTableData();
    }
  }

  calculateTableData(): void {
    this.totalPages = Math.ceil(this.fullDataSet.length / this.pageSize);
    this.isFirstPage = this.currentPage === 1;
    this.isLastPage = this.currentPage === this.totalPages;
  }

  updateTableData(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.dataSource.data = this.fullDataSet.slice(start, end);
  }

  previousPage(): void {
    if (!this.isFirstPage) {
      this.currentPage--;
      this.calculateTableData();
      this.updateTableData();
    }
  }

  nextPage(): void {
    if (!this.isLastPage) {
      this.currentPage++;
      this.calculateTableData();
      this.updateTableData();
    }
  }

}