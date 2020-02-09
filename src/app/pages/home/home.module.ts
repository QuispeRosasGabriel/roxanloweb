import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

//components
import { SliderComponent } from './slider/slider.component';

//This module helps u to use the pipe "translate"
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
  ],
  imports: [
    HomeRoutingModule,
    TranslateModule
  ],
  exports: [
    HomeComponent,
    HomeRoutingModule
  ]

})

export class HomeModule { }
