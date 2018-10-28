import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisTarjetasComponent } from './mis-tarjetas/mis-tarjetas.component';
import { MisTarjetasHeaderComponent } from './mis-tarjetas/mis-tarjetas-header/mis-tarjetas-header.component';
import { MisTarjetasListComponent } from './mis-tarjetas/mis-tarjetas-list/mis-tarjetas-list.component';
import { MisTarjetasListDateComponent } from './mis-tarjetas/mis-tarjetas-list/mis-tarjetas-list-date/mis-tarjetas-list-date.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MisTarjetasFilterComponent } from './mis-tarjetas/mis-tarjetas-list/mis-tarjetas-filter/mis-tarjetas-filter.component';

@NgModule({
  imports: [
    CommonModule,
    NgbTooltipModule
  ],
  declarations: [MisTarjetasComponent, MisTarjetasHeaderComponent, MisTarjetasListComponent, MisTarjetasListDateComponent, MisTarjetasFilterComponent]
})
export class TarjetasModule { }
