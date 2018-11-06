import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mis-tarjetas-list',
  templateUrl: './mis-tarjetas-list.component.html',
  styleUrls: ['./mis-tarjetas-list.component.scss']
})
export class MisTarjetasListComponent {

  @Input() cards: any[];

  constructor() { }
}
