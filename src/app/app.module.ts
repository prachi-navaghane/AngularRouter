import { FirstComponent } from './first/first.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouterModule } from "app/app.router";
import { WelcomeComponent } from './welcome/welcome.component';
import { SecondComponent } from './second/second.component';
import { ProfileComponent } from './second/profile.component';
import { ShortProfileComponent } from './second/short-profile.component';

@NgModule({
  declarations: [
    AppComponent
    ,FirstComponent, WelcomeComponent, SecondComponent, ProfileComponent, ShortProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
