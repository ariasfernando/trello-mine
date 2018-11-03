import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { MisTarjetasComponent } from './tarjetas/mis-tarjetas/mis-tarjetas.component';

import { LoggedInGuard } from './core/logged-in/logged-in.guard';
import { LoggedOutGuard } from './core/logged-out/logged-out.guard';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [ LoggedOutGuard ] },
  { path: 'mis-tarjetas', component: MisTarjetasComponent, canActivate: [ LoggedInGuard ] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( ROUTES )
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
