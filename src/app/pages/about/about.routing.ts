import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';


const route: Routes = [
  {
    path: "", component: AboutComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})

export class AboutRoutingModule { }

