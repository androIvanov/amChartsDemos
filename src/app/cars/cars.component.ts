import { Component, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  private chart: any = am4charts.PieSeries;
  constructor(private zone: NgZone) { }

  ngAfterViewInit(){
    this.zone.runOutsideAngular(() => {
      am4core.useTheme(am4themes_animated);
      let chart = am4core.create('carChart', am4charts.PieChart);
      let title = chart.titles.create();
      title.text = "German Cars";

      chart.data = [
        {"model": "BMW M5", "horsepower": 600},
        {"model": "Mercedes E63", "horsepower": 603},
        {"model": "Audi RS6", "horsepower": 591},
        {"model": "VW Golf GTI", "horsepower": 217}
      ];

      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.category = "model";
      pieSeries.dataFields.value = "horsepower";

      chart.innerRadius = am4core.percent(40);

      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;
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
