import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallManagerComponent } from './page/call-manager.component';
const routes: Routes = [
  {
    path:'',
    component:CallManagerComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallManagerRoutingModule { }
