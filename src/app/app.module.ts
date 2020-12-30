import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartPageComponent } from './chart-page/chart-page.component';
import { CarsComponent } from './cars/cars.component';
import { FoodComponent } from './food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartPageComponent,
    CarsComponent,
    FoodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
