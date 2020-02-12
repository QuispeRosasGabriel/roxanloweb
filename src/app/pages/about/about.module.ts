import { NgModule } from "@angular/core";
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about.routing';

//Translation
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    AboutRoutingModule,
    TranslateModule
  ],
  exports: [
    AboutComponent,
    AboutRoutingModule
  ]
})

export class AboutModule { }
