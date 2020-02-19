import { NgModule } from "@angular/core";
import { GalleryComponent } from './gallery.component';
import { CommonModule } from '@angular/common';

//This module helps u to use the pipe "translate"
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoutingModule } from './gallery.routing';

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    GalleryRoutingModule,
    TranslateModule,
    CommonModule
  ],
  exports: [
    GalleryComponent,
    GalleryRoutingModule
  ]
})

export class GalleryModule { }
