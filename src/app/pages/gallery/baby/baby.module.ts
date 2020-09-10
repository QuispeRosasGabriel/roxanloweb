import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//This module helps u to use the pipe "translate"
import { TranslateModule } from "@ngx-translate/core";

import { BabyRoutingModule } from "./baby.routing";
import { BabyComponent } from "./baby.component";
@NgModule({
  declarations: [BabyComponent],
  imports: [BabyRoutingModule, TranslateModule, CommonModule],
  exports: [BabyComponent, BabyRoutingModule],
})
export class BabyModule {}
