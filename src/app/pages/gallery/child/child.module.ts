import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//This module helps u to use the pipe "translate"
import { TranslateModule } from "@ngx-translate/core";
import { ChildComponent } from "./child.component";
import { ChildRoutingModule } from "./child.routing";
import { GalleryPieceModule } from "src/app/shared/gallery-piece/gallery-piece.module";

@NgModule({
  declarations: [ChildComponent],
  imports: [
    ChildRoutingModule,
    GalleryPieceModule,
    TranslateModule,
    CommonModule,
  ],
  exports: [ChildComponent, ChildRoutingModule],
})
export class ChildModule {}
