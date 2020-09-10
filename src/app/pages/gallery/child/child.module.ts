import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//This module helps u to use the pipe "translate"
import { TranslateModule } from "@ngx-translate/core";
import { ChildComponent } from "./child.component";
import { ChildRoutingModule } from "./child.routing";

@NgModule({
  declarations: [ChildComponent],
  imports: [ChildRoutingModule, TranslateModule, CommonModule],
  exports: [ChildComponent, ChildRoutingModule],
})
export class ChildModule {}
