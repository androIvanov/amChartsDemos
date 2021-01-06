import { Component, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-speedometer',
  templateUrl: './speedometer.component.html',
  styleUrls: ['./speedometer.component.css']
})
export class SpeedometerComponent {

  constructor(private zone: NgZone) { }

  ngAfterViewInit(){
    this.zone.runOutsideAngular(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("speedometer", am4charts.GaugeChart);
      chart.hiddenState.properties.opacity = 0;

      chart.innerRadius = -65;
      var colorSet = new am4core.ColorSet();

      let axis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
      axis.min = 0;
      axis.max = 100;

      let rangeZero = axis.axisRanges.create();
      rangeZero.value = 0;
      rangeZero.endValue = 50;
      rangeZero.axisFill.fillOpacity = 1;
      rangeZero.axisFill.fill = colorSet.getIndex(0);
      rangeZero.axisFill.zIndex = -1;

      let rangeOne = axis.axisRanges.create();
      rangeOne.value = 50;
      rangeOne.endValue = 80;
      rangeOne.axisFill.fillOpacity = 1;
      rangeOne.axisFill.fill = colorSet.getIndex(2);
      rangeOne.axisFill.zIndex = -1;

      let rangeTwo = axis.axisRanges.create();
      rangeTwo.value = 80;
      rangeTwo.endValue = 100;
      rangeTwo.axisFill.fillOpacity = 1;
      rangeTwo.axisFill.fill = colorSet.getIndex(5);
      rangeTwo.axisFill.zIndex = -1;

      let hand = chart.hands.push(new am4charts.ClockHand());

      function randomValue() {
        hand.showValue(Math.random() * 100, 1000, am4core.ease.cubicOut);
        chart.setTimeout(randomValue, 400);
      }
      randomValue();
    });
  }

}
