import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';
import{SideNavComponent} from './side-nav/side-nav.component';
import {TaskListComponent} from './task-list/task-list.component';
 
const routes: Routes = [
  {
    path:"",
    component:SideNavComponent,
    children:[
      {
      path:"checklist",
      Component:TaskListComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
