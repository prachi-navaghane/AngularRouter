import { ShortProfileComponent } from './second/short-profile.component';
import { ProfileComponent } from './second/profile.component';
import { SecondComponent } from './second/second.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Component } from '@angular/core/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';

const secondRoutes : Routes =[
{ path: 'profile', component: ProfileComponent },
{ path: 'shortProfile', component: ShortProfileComponent }
];

export const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second/:id', component:SecondComponent, children: secondRoutes },
  { path: '**', redirectTo: '' }

];

export const AppRouterModule = RouterModule.forRoot(appRoutes);
