import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.css']
})
export class ChronometerComponent implements OnInit {

  hour: number = 0;
  minute: number = 0;
  second: number = 0;
  milisecond: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  start(){
    setInterval(()=>{
      this.milisecond +=1;
      if (this.milisecond == 100) {
        this.milisecond = 0;
        this.second += 1;
        if (this.second == 60) {
          this.second = 0;
          this.minute += 1;
          if (this.minute == 60) {
            this.minute = 0;
            this.hour =+ 1;
          }
        }
      }

    },10)
  }

  stop(){
    console.log('Para');
  }

}
