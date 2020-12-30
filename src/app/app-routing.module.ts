import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { ChartPageComponent } from './chart-page/chart-page.component';

const routes: Routes = [
  {path:'', component: ChartPageComponent},
  {path:'car', component: CarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
