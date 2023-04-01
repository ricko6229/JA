import { Component } from '@angular/core';
import { ElementRef, ViewChild, AfterViewInit,OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-calculadora-mensualidad-de-automovil',
  templateUrl: './calculadora-mensualidad-de-automovil.component.html',
  styleUrls: ['./calculadora-mensualidad-de-automovil.component.scss']
})

export class CalculadoraMensualidadDeAutomovilComponent implements OnInit {
  loanAmount: number = 30000;
  interestRate: number = 8.5;
  loanTenure: number = 240;

  interest: number = this.interestRate / 12 / 100;
  loanEMI: number = 0;
  totalAmount: number = 0;
  totalInterest: number = 0;

  @ViewChild('myChart', { static: true }) chartRef!: ElementRef;

  myChart!: Chart;

  constructor() {}

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    // The previous 'init' method implementation from the component code provided earlier
  }

  // Add all other methods provided in the component code earlier
}

