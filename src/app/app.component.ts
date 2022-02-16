import { Component } from '@angular/core';
import { KaisensDataService } from './kaisens-data.service';
import { Chart,registerables } from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  result: any;
  lastNight: any;
  average: any;
  date: any;
  sleepStatus: any = [];

  constructor(private status: KaisensDataService) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.status.getData().then((res) => {
      this.result = res;
      console.log(this.result);
     // this.lastNight = this.result.data.map((data:any)=>data.sleep_duration);
     //this.date = this.result.data.map((data: any) => timestamp);


      //show chart data
      this.sleepStatus = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.date,
          datasets: [
            {
              label: 'Sleep Status',
              data: this.lastNight,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
              ],
              borderWidth: 1,
            },
          ],
        },
      });
    });
  }
}
