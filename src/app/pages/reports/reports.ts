import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';

interface reportItem {
  title: string,
  category: string,
  date: string
}

@Component({
  selector: 'app-reports',
  imports: [...SharedModules, RouterLink],
  templateUrl: './reports.html',
  styleUrl: './reports.scss',
})
export class Reports {
  public reportList: reportItem[] = [
    {title: 'Sample report title 1', category: 'Sample category', date: '01/01/1978'}
  ];
  public dataSource: any = new MatTableDataSource(this.reportList);
  public displayedColumns: string[] = ['no', 'title', 'date', 'actions'];

  constructor(
    private router: Router
  ){

  }
}
