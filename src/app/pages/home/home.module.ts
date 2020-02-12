import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

//components
import { SliderComponent } from './slider/slider.component';
import { WantedComponent } from './wanted/wanted.component';
import { MixedComponent } from './mixed/mixed.component';
import { HeroComponent } from './hero/hero.component';

//This module helps u to use the pipe "translate"
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    WantedComponent,
    MixedComponent,
    HeroComponent,
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
