import { Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  displayedColumns: string[] = ['Location', 'Views', 'Sales', 'Conversion','Total'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  Location: string;
  Views: number;
  Sales: number;
  Conversion: string;
  Total:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Location: 'google.com', Views: 3746, Sales: 752, Conversion: '43%' , Total:'$19291'},
  {Location: 'facebook.com', Views: 5187, Sales: 652, Conversion: '35%' , Total:'$1989'},
  {Location: 'twitter.com', Views: 4746, Sales: 467, Conversion: '56%' , Total:'$8991'},
  {Location: 'Direct, email, IM', Views: 3456, Sales: 879, Conversion: '30%' , Total:'$2901'},
  {Location: 'Linkedin.com', Views: 6780, Sales: 562, Conversion: '83%' , Total:'$12901'},
  {Location: 'instagram.com', Views: 3746, Sales: 752, Conversion: '43%' , Total:'$21291'},
  
];

