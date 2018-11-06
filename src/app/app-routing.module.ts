import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { MisTarjetasComponent } from './tarjetas/mis-tarjetas/mis-tarjetas.component';

import { LoggedInGuard } from './core/logged-in/logged-in.guard';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cards', component: MisTarjetasComponent, canActivate: [ LoggedInGuard ] },
  { path: '**', redirectTo: 'cards', pathMatch: 'full' },
  { path: '', redirectTo: 'cards', pathMatch: 'full' }
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
