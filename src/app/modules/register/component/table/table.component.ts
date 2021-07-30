import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() {}
  @Input() dataSource = new MatTableDataSource<[]>();
  
  
  displayedColumns:  String[] = ["name","surname","username","password"];
  
  ngOnInit(): void {
  }

}
