import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

//components
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
  ],
  imports: [
    HomeRoutingModule,
  ],
  exports: [
    HomeComponent,
    HomeRoutingModule
  ]

})

export class HomeModule { }
