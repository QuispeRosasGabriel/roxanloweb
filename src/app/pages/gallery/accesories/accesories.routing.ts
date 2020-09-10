import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccesoriesComponent } from "./accesories.component";

const route: Routes = [
  {
    path: "",
    component: AccesoriesComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class AccesoriesRoutingModule {}
