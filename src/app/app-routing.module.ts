import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CalculadorasComponent } from './calculadoras/calculadoras.component';
import { CalculadoraMensualidadDeAutomovilComponent } from './calculadora-mensualidad-de-automovil/calculadora-mensualidad-de-automovil.component';
import { CalculadoraFiftythirtyComponent } from './calculadora-fiftythirty/calculadora-fiftythirty.component';


const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'calculadoras',component:CalculadorasComponent},
  {path:'calculadora-mensualidad-de-automovil',component:CalculadoraMensualidadDeAutomovilComponent},
  {path:'calculadora-fiftythirty',component:CalculadoraFiftythirtyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
