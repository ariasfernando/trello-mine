import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ICard } from '../../../../model/card';

@Component({
  selector: 'app-mis-tarjetas-list-item',
  templateUrl: './mis-tarjetas-list-item.component.html',
  styleUrls: ['./mis-tarjetas-list-item.component.scss']
})
export class MisTarjetasListItemComponent implements OnInit {

  @Input() card: ICard;
  @HostBinding('attr.class') class: string;

  constructor() {
    this.class = '';
  }

  ngOnInit() {
  }

}