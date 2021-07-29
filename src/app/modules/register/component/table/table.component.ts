import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() {
    console.log(this.data)
  }
  @Input() data: any;

  dataSource = new MatTableDataSource<[]>();
  displayedColumns:  String[] = ["name","surname","username","password"];
  
  ngOnInit(): void {
    console.log(this.data)
    this.dataSource = new MatTableDataSource(this.data);
  }

}
