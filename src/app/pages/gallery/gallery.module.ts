import { NgModule } from "@angular/core";
import { GalleryComponent } from './gallery.component';

//This module helps u to use the pipe "translate"
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoutingModule } from './gallery.routing';

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    GalleryRoutingModule,
    TranslateModule
  ],
  exports: [
    GalleryComponent,
    GalleryRoutingModule
  ]
})

export class GalleryModule { }
