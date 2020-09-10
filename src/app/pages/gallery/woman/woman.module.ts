import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//This module helps u to use the pipe "translate"
import { TranslateModule } from "@ngx-translate/core";

import { WomanRoutingModule } from "./woman.routing";
import { WomanComponent } from "./woman.component";
import { GalleryPieceModule } from "src/app/shared/gallery-piece/gallery-piece.module";
@NgModule({
  declarations: [WomanComponent],
  imports: [
    WomanRoutingModule,
    GalleryPieceModule,
    TranslateModule,
    CommonModule,
  ],
  exports: [WomanComponent, WomanRoutingModule],
})
export class WomanModule {}
