import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTarjetasListDateComponent } from './mis-tarjetas-list-date.component';

describe('MisTarjetasListDateComponent', () => {
  let component: MisTarjetasListDateComponent;
  let fixture: ComponentFixture<MisTarjetasListDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisTarjetasListDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisTarjetasListDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
