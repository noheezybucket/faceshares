import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr'

import { AppComponent } from './app.component';
import { FaceShareComponent } from './face-share/face-share.component';
import { FaceShareListComponent } from './face-share-list/face-share-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceShareComponent } from './single-face-share/single-face-share.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceShareComponent,
    FaceShareListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleFaceShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'fr-FR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}
