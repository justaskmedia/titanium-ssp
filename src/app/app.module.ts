import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmoothHeightAnimDirective } from './directives/smooth-height/smooth-height.directive';
import { HomeComponent } from './components/home/home.component';
import { ExpiredComponent } from './components/expired/expired.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { GenerateAPIComponent } from './components/generate-api/generate-api.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { CommonModule } from '@angular/common';  

// import { AppPasswordDirective } from './directives/app-password/app-password.directive';

@NgModule({
  declarations: [
    AppComponent,
    SmoothHeightAnimDirective,
    HomeComponent,
    ExpiredComponent,
    SetPasswordComponent,
    GenerateAPIComponent,
    ThankYouComponent
    // AppPasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
