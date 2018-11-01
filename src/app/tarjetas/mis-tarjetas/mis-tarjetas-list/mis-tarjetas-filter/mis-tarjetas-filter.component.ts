import { Component, Input, Output, EventEmitter, HostBinding, OnChanges } from '@angular/core';

@Component({
  selector: 'app-mis-tarjetas-filter',
  templateUrl: './mis-tarjetas-filter.component.html',
  styleUrls: ['./mis-tarjetas-filter.component.scss']
})
export class MisTarjetasFilterComponent implements OnChanges {

  @Input() list: any[];
  @Output() onListUpdate: EventEmitter<any[]>;

  public filterAll: boolean;
  private originalList: any[];

  constructor(
  ) {
    this.onListUpdate = new EventEmitter<any[]>();
  }

  ngOnChanges() {
    this.originalList = this.list;
  }

  public removeNoDue(): void {
    this.filterAll = true;
    this.onListUpdate.emit( this.originalList.filter( item => item.due !== null ) );
  }

  public addNoDue(): void { 
    this.filterAll = false;
    this.onListUpdate.emit( this.originalList );
  }

  public filterOnlyNextDays(): void {
    this.onListUpdate.emit( this.originalList.filter( item => item.due !== null ) );
  }

  public filterOnlyToday(): void {
    this.onListUpdate.emit( this.originalList.filter( item => item.due !== null ) );
  }

  public filterOnlyDue(): void {
    this.onListUpdate.emit( this.originalList.filter( item => item.due !== null ) );
  }

}
