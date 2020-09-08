import { NgModule } from "@angular/core";
import { GalleryComponent } from './gallery.component';
import { CommonModule } from '@angular/common';

//This module helps u to use the pipe "translate"
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoutingModule } from './gallery.routing';

import { PhotoPieceComponent } from 'src/app/shared/photo-piece/photo-piece.component';
import { WomanComponent } from './woman/woman.component';
import { BabyComponent } from './baby/baby.component';
import { ChildComponent } from './child/child.component';
import { AccesoriesComponent } from './accesories/accesories.component';

@NgModule({
  declarations: [
    GalleryComponent,
    PhotoPieceComponent,
    WomanComponent,
    BabyComponent,
    ChildComponent,
    AccesoriesComponent
  ],
  imports: [
    GalleryRoutingModule,
    TranslateModule,
    CommonModule,
  ],
  exports: [
    GalleryComponent,
    GalleryRoutingModule,
    PhotoPieceComponent

  ]
})

export class GalleryModule { }
