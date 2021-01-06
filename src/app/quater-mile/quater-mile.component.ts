import { Component, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-quater-mile',
  templateUrl: './quater-mile.component.html',
  styleUrls: ['./quater-mile.component.css']
})
export class QuaterMileComponent {
  private chart: any = am4charts.RadarChart;

  constructor(private zone: NgZone) { }

  ngViewAfterInit(){
    this.zone.runOutsideAngular(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("quaterMile", am4charts.RadarChart);
      let title = chart.titles.create();
      title.text = "Quatermile times";
      chart.data = [
        {"model": "RS 6", "time": 11.2},
        {"model": "E 63", "time": 11.7},
        {"model": "M5", "time": 10.2},
        {"model": "GTI", "time": 15.2},
      ];

      let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis<am4charts.AxisRendererRadial>());
      

      
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
