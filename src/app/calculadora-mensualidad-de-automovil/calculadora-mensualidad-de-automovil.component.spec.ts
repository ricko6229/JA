import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraMensualidadDeAutomovilComponent } from './calculadora-mensualidad-de-automovil.component';

describe('CalculadoraMensualidadDeAutomovilComponent', () => {
  let component: CalculadoraMensualidadDeAutomovilComponent;
  let fixture: ComponentFixture<CalculadoraMensualidadDeAutomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraMensualidadDeAutomovilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraMensualidadDeAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
