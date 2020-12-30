import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartPageComponent } from './chart-page/chart-page.component';
import { CarChartComponent } from './car-chart/car-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartPageComponent,
    CarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
