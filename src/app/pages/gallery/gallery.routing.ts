import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GalleryComponent } from "./gallery.component";
import { WomanComponent } from "./woman/woman.component";

const route: Routes = [
  {
    path: "",
    component: GalleryComponent,
  },
  {
    path: "/woman",
    component: WomanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
