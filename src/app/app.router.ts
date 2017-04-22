import { Component } from '@angular/core/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from "./first/first.component";
export const appRoutes : Routes = [
  { path:'first', component: FirstComponent}
];

export const AppRouterModule =  RouterModule.forRoot(appRoutes);
