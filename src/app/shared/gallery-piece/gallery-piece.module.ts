import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//This module helps u to use the pipe "translate"
import { TranslateModule } from "@ngx-translate/core";
import { GalleryPieceComponent } from "./gallery-piece.component";

@NgModule({
  declarations: [GalleryPieceComponent],
  imports: [TranslateModule, CommonModule],
  exports: [GalleryPieceComponent],
})
export class GalleryPieceModule {}
