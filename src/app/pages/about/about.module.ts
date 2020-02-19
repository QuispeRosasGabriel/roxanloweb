import { NgModule } from "@angular/core";
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about.routing';
import { CommonModule } from '@angular/common';

//Translation
import { TranslateModule } from '@ngx-translate/core';
import { SupertextComponent } from './supertext/supertext.component';

@NgModule({
  declarations: [
    AboutComponent,
    SupertextComponent
  ],
  imports: [
    AboutRoutingModule,
    TranslateModule,
    CommonModule
  ],
  exports: [
    AboutComponent,
    AboutRoutingModule
  ]
})

export class AboutModule { }
