import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { SalesComponent } from './sales/sales.component';




const routes: Routes = [
 {
  path:'',
  pathMatch:'full',
  redirectTo:'home'
 },

 {
  path:'',
  component:LayoutComponent,
  children:[
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'sales',
      component:SalesComponent
    }
  ]

 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
