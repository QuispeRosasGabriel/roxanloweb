import { NgModule } from "@angular/core";
import { GalleryComponent } from './gallery.component';
import { CommonModule } from '@angular/common';

//This module helps u to use the pipe "translate"
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoutingModule } from './gallery.routing';

import { PhotoPieceComponent } from 'src/app/shared/photo-piece/photo-piece.component';
@NgModule({
  declarations: [
    GalleryComponent,
    PhotoPieceComponent
  ],
  imports: [
    GalleryRoutingModule,
    TranslateModule,
    CommonModule
  ],
  exports: [
    GalleryComponent,
    GalleryRoutingModule,
    PhotoPieceComponent

  ]
})

export class GalleryModule { }
