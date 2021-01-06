import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartPageComponent } from './chart-page/chart-page.component';
import { CarsComponent } from './cars/cars.component';
import { FoodComponent } from './food/food.component';
import { QuaterMileComponent } from './quater-mile/quater-mile.component';
import { SpeedometerComponent } from './speedometer/speedometer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartPageComponent,
    CarsComponent,
    FoodComponent,
    QuaterMileComponent,
    SpeedometerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
