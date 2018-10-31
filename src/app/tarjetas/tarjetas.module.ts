import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisTarjetasComponent } from './mis-tarjetas/mis-tarjetas.component';
import { MisTarjetasHeaderComponent } from './mis-tarjetas/mis-tarjetas-header/mis-tarjetas-header.component';
import { MisTarjetasListComponent } from './mis-tarjetas/mis-tarjetas-list/mis-tarjetas-list.component';
import { MisTarjetasListDateComponent } from './mis-tarjetas/mis-tarjetas-list/mis-tarjetas-list-date/mis-tarjetas-list-date.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MisTarjetasFilterComponent } from './mis-tarjetas/mis-tarjetas-list/mis-tarjetas-filter/mis-tarjetas-filter.component';
import { MisTarjetasListItemComponent } from './mis-tarjetas/mis-tarjetas-list/mis-tarjetas-list-item/mis-tarjetas-list-item.component';

import { MarkdownModule } from 'ngx-markdown';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    NgbTooltipModule,
    MarkdownModule.forRoot(),
    AngularFontAwesomeModule
  ],
  declarations: [MisTarjetasComponent, MisTarjetasHeaderComponent, MisTarjetasListComponent, MisTarjetasListDateComponent, MisTarjetasFilterComponent, MisTarjetasListItemComponent]
})
export class TarjetasModule { }
