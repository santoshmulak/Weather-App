import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForcastComponent } from './component/forcast/forcast.component';

const routes: Routes = [
  // {path:'',redirectTo:'Forcast',pathMatch:"full"},
  {path:'forcast',component : ForcastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
