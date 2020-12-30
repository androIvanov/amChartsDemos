import { Component, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  private chart: any = am4charts.XYChart;
  constructor(private zone: NgZone) { }

  ngAfterViewInit(){
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("foodChart", am4charts.XYChart);
      chart.data = [
        {"food": "grapes", "nutrition": 8, "price": 3},
        {"food": "pizza", "nutrition": 2, "price": 13},
        {"food": "tomatoes", "nutrition": 5, "price": 2},
        {"food": "green peper", "nutrition": 9, "price": 1.5},
        {"food": "avocado", "nutrition": 10, "price": 4},
        {"food": "doner", "nutrition": 1, "price": 6},       
      ];

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "food";
      categoryAxis.renderer.minGridDistance = 3;


      categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
        if (target.dataItem && target.dataItem.index & 2 == 2) {
          return dy + 25;
        }
        return dy;
      });

      
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.grid.template.strokeOpacity = 0;

      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "nutrition";
      series.dataFields.categoryX = "food";


      series.name = "Visits";
      series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
      series.columns.template.fillOpacity = .8;


      /// Line axis 

      let lineAxis = chart.series.push(new am4charts.LineSeries());
      lineAxis.dataFields.valueY = "nutrition";
      lineAxis.dataFields.categoryX = "food";

      let bullet = lineAxis.bullets.push(new am4charts.Bullet());
      let circle = bullet.createChild(am4core.Circle); 
      bullet.tooltipText = `Nutitional value is {valueY}`;
      circle.fill = am4core.color("red");
      circle.width = 6;
      circle.height = 6;

      // Price line

      let priceLines = chart.series.push(new am4charts.LineSeries());
      priceLines.dataFields.valueY = "price";
      priceLines.dataFields.categoryX = "food";

      let bulletPrice = priceLines.bullets.push(new am4charts.Bullet());
      let circlePrice = bulletPrice.createChild(am4core.Circle); 
      bulletPrice.tooltipText = `{valueY}$`;
      circlePrice.fill = am4core.color("yellow");
      circlePrice.width = 9;
      circlePrice.height = 9;
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
