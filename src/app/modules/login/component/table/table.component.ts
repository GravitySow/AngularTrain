import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }
  @Input() data: any;
  dataSource = new MatTableDataSource<[]>();
  displayedColumns:  String[] = ["id","username","password"];
  
  ngOnInit(): void {
    console.log(this.data)
    this.dataSource = new MatTableDataSource(this.data);
  }

}
