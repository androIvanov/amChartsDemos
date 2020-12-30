import { Component, NgZone } from '@angular/core';
import * as amCore from '@amcharts/amcharts4/core';
import * as amCharts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-car-chart',
  templateUrl: './car-chart.component.html',
  styleUrls: ['./car-chart.component.css']
})
export class CarChartComponent {
  private chart: any = amCharts.PieChart;

  constructor(private zone: NgZone) { }

  ngViewAfterInit(){
    this.zone.runOutsideAngular(() => {
      let chart = amCore.create("carChart", amCharts.PieChart);
      

    });
  }

  ngOnDestroy(){
    this.zone.runOutsideAngular(() => {
      if(this.chart){
        this.chart.dispose();
      }
    });
  }
}
