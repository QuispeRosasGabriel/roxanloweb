import { NgModule } from "@angular/core";
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';

//This module helps u to use the pipe "translate"
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    ContactRoutingModule,
    TranslateModule
  ],
  exports: [
    ContactComponent,
    ContactRoutingModule
  ]
})

export class ContactModule { }
