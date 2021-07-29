import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor() { }
  mockData: any[] = [
      {id: "1", username: "test1" , password: "12345"},
      {id: "2", username: "test2" , password: "12345"}
    ];
  ngOnInit(): void {
    
  }

}
