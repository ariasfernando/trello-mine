import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-mis-tarjetas-header',
  templateUrl: './mis-tarjetas-header.component.html',
  styleUrls: ['./mis-tarjetas-header.component.scss']
})
export class MisTarjetasHeaderComponent implements OnInit {

  @Input() cantidadTarjetas: number;
  @Output() filtro: EventEmitter;

  public showMenu: boolean;

  constructor() {
    this.showMenu = true;
  }

  ngOnInit() {
  }

}
