import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTarjetasFilterComponent } from './mis-tarjetas-filter.component';

describe('MisTarjetasFilterComponent', () => {
  let component: MisTarjetasFilterComponent;
  let fixture: ComponentFixture<MisTarjetasFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisTarjetasFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisTarjetasFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
