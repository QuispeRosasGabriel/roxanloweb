import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//This module helps u to use the pipe "translate"
import { TranslateModule } from "@ngx-translate/core";
import { AccesoriesComponent } from "./accesories.component";
import { AccesoriesRoutingModule } from "./accesories.routing";
import { GalleryPieceModule } from "src/app/shared/gallery-piece/gallery-piece.module";

@NgModule({
  declarations: [AccesoriesComponent],
  imports: [
    AccesoriesRoutingModule,
    TranslateModule,
    GalleryPieceModule,
    CommonModule,
  ],
  exports: [AccesoriesComponent, AccesoriesRoutingModule],
})
export class ChildModule {}
