import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BabyComponent } from "./baby.component";

const route: Routes = [
  {
    path: "",
    component: BabyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class BabyRoutingModule {}
