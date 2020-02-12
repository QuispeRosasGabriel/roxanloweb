import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';

const route: Routes = [
  {
    path: "", component: GalleryComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})

export class GalleryRoutingModule { }
