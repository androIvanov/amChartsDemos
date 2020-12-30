import { Component, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // private chart: am4charts.XYChart;

  constructor(private zone: NgZone){

  }

  ngAfterViewInit(){
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create('chart', am4charts.XYChart);
      let title = chart.titles.create();
      title.text = "This is my chart";
    });
  }

  

  ngOnDestroy(){

  }
}
