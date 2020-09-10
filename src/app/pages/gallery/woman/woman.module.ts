import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//This module helps u to use the pipe "translate"
import { TranslateModule } from "@ngx-translate/core";

import { WomanRoutingModule } from "./woman.routing";
import { WomanComponent } from "./woman.component";
import { GalleryPieceComponent } from "src/app/shared/gallery-piece/gallery-piece.component";

@NgModule({
  declarations: [WomanComponent, GalleryPieceComponent],
  imports: [WomanRoutingModule, TranslateModule, CommonModule],
  exports: [WomanComponent, WomanRoutingModule, GalleryPieceComponent],
})
export class WomanModule {}
