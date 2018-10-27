import { Component, Input, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-mis-tarjetas-list-date',
  templateUrl: './mis-tarjetas-list-date.component.html',
  styleUrls: ['./mis-tarjetas-list-date.component.scss']
})
export class MisTarjetasListDateComponent implements OnInit {

  @Input() fecha: Date;
  @HostBinding( 'attr.class' ) style: string;

  constructor() { }

  ngOnInit() {
  }

  private setDate

}