import { Component, OnInit } from '@angular/core';

import { Interval } from '../../models/setInterval/setInterval';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  interval:Interval;
  minDisplay: string = '00';
  secDisplay: string = '00';
  indeterminate = false;
  labelPosition: 'before';
  disabled = false;

  constructor(

  ) {
    this.interval = new Interval(true,0,0,0);
  }

  ngOnInit(): void {
  }


  addSecs(){
    if (++this.interval.sec > 59) {
      this.interval.sec = 0
    }
    this.secDisplay = this.join(this.interval.sec);
  }
  subtractSecs(){
    if (--this.interval.sec < 0) {
      this.interval.sec = 59
    }
    this.secDisplay = this.join(this.interval.sec);
  }

  addMins(){
    if (++this.interval.min > 59) {
      this.interval.min = 0
    }
    this.minDisplay = this.join(this.interval.min);
  }
  subtractMins(){
    if (--this.interval.min < 0) {
      this.interval.min = 59
    }
    this.minDisplay = this.join(this.interval.min);
  }


  join(a){
    if (a.toString().length == 1) {
      return '0' + a;
    } else if(a.toString().length > 1) {
      return a;
    }
  }

}
