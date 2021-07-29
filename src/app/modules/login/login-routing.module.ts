import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseComponent } from '../choose/choose.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
    
    // children: [
    //   {
    //     path: 'choose',
    //     loadChildren: () =>
    //       import('../choose/choose.module').then((m) => m.ChooseModule)
    //   },
    // ],
  },

  { path: 'choose', component: ChooseComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
