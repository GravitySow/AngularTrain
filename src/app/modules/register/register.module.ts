import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './component/table/table.component';

@NgModule({
  declarations: [
    RegisterComponent,
    TableComponent
  ],
  
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
  
})
export class RegisterModule { }
