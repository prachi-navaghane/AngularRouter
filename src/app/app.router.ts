import { SecondComponent } from './second/second.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Component } from '@angular/core/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from "./first/first.component";
export const appRoutes : Routes = [
  { path:'', component: WelcomeComponent},
  { path:'first', component: FirstComponent},
  { path:'second/:id', component: SecondComponent}
];

export const AppRouterModule =  RouterModule.forRoot(appRoutes);
