import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChooseRoutingModule } from './choose-routing.module';
import { ChooseComponent } from './choose.component';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    ChooseComponent
  ],
  imports: [
    CommonModule,
    ChooseRoutingModule,
    MaterialModule
  ]
})
export class ChooseModule { }
