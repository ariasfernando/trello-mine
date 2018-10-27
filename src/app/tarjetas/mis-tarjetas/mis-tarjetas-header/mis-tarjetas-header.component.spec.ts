import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTarjetasHeaderComponent } from './mis-tarjetas-header.component';

describe('MisTarjetasHeaderComponent', () => {
  let component: MisTarjetasHeaderComponent;
  let fixture: ComponentFixture<MisTarjetasHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisTarjetasHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisTarjetasHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
