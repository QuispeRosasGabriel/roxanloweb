import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChildComponent } from "./child.component";

const route: Routes = [
  {
    path: "",
    component: ChildComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class ChildRoutingModule {}
