import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//shared
import { TheMenuComponent } from './shared/the-menu/the-menu.component';
import { FinComponent } from './shared/fin/fin.component';
import { SocialComponent } from './shared/social/social.component';
import { GalleryPieceComponent } from './shared/gallery-piece/gallery-piece.component';


@NgModule({
  declarations: [
    AppComponent,
    TheMenuComponent,
    FinComponent,
    SocialComponent,
    GalleryPieceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
