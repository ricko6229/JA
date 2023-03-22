import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraHomepageComponent } from './calculadora-homepage.component';

describe('CalculadoraHomepageComponent', () => {
  let component: CalculadoraHomepageComponent;
  let fixture: ComponentFixture<CalculadoraHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
