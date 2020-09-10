import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WomanComponent } from "./woman.component";

const route: Routes = [
  {
    path: "",
    component: WomanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class WomanRoutingModule {}
