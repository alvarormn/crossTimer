import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.css']
})
export class ChronometerComponent implements OnInit {

  displayDay :string = "00";
  displayHour :string = "00";
  displayMin :string = "00";
  displaySec :string = "00";
  displayMil :string = "00";
  day :number = 0;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;
  milisecond: number = 0;
  interval = [];
  chrono;
  clickedPlay:boolean = false;
  clickedPause:boolean = true;
  clickedInterval:boolean = true;
  isPaused:boolean;
  count;

  constructor() {
  }

  ngOnInit(): void {
  }

  convert(time){
    let timeText = time.toString();

    let display = '00';

    if(timeText.length > 1){

      return timeText
    } else if(timeText.length == 1){
      return "0" + timeText;
    }
  }

  start(){
    this.count = 0;
    this.isPaused = false;

    this.chrono = setInterval(()=>{
      this.milisecond +=1;
      this.displayMil = this.convert(this.milisecond);
      if (this.milisecond == 100) {
        this.milisecond = 0;
        this.displayMil = '00';
        this.second += 1;
        this.displaySec = this.convert(this.second);
        if (this.second == 60) {
          this.second = 0;
          this.displaySec = '00';
          this.minute += 1;
          this.displayMin = this.convert(this.minute);
          if (this.minute == 60) {
            this.minute = 0;
            this.displayMin = '00';
            this.hour =+ 1;
            this.displayHour = this.convert(this.hour);
            if (this.hour == 24) {
              this.hour = 0;
              this.displayHour = '00';
              this.day =+ 1;
              this.displayDay = this.convert(this.day);
            }
          }
        }
      }

    },10)
  }

  pause(){
    clearInterval(this.chrono)
  }

  getInterval(){
    this.count =+1
    let data = this.displayDay + ':' + this.displayHour + ':' + this.displayMin + ':' + this.displaySec + ':' + this.displayMil;
    if (this.isPaused === true && this.count > 0) {
      this.clickedInterval = true;
    }
    this.interval.push(data);

  }

  stop(){
    clearInterval(this.chrono);
    this.displayDay = "00";
    this.displayHour = "00";
    this.displayMin = "00";
    this.displaySec = "00";
    this.displayMil = "00";
    this.day = 0;
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.milisecond = 0;
    this.interval = [];
    this.chrono;
    this.clickedPlay = false;
    this.clickedPause = true;
    this.clickedInterval = true;
    this.isPaused = true;
    this.count = 0;
  }

}
