import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTarjetasListComponent } from './mis-tarjetas-list.component';

describe('MisTarjetasListComponent', () => {
  let component: MisTarjetasListComponent;
  let fixture: ComponentFixture<MisTarjetasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisTarjetasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisTarjetasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
