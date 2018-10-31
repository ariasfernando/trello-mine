import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTarjetasListItemComponent } from './mis-tarjetas-list-item.component';

describe('MisTarjetasListItemComponent', () => {
  let component: MisTarjetasListItemComponent;
  let fixture: ComponentFixture<MisTarjetasListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisTarjetasListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisTarjetasListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
