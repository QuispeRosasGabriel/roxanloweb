import { NgModule } from "@angular/core";
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';
import { CommonModule } from '@angular/common';

//This module helps u to use the pipe "translate"
import { TranslateModule } from '@ngx-translate/core';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    ContactComponent,
    FormComponent
  ],
  imports: [
    ContactRoutingModule,
    TranslateModule,
    CommonModule
  ],
  exports: [
    ContactComponent,
    ContactRoutingModule
  ]
})

export class ContactModule { }
