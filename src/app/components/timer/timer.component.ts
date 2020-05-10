import { Component, OnInit } from '@angular/core';

import { Time } from '../../models/setTimeTimer/setTime';
import { Display } from '../../models/setTimeTimer/setDisplay';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  time: Time;
  display: Display;
  buttonPlay = 'Iniciar';
  clickedPlay: Boolean = false;
  clickedPause: Boolean = true;
  chrono;
  dFinish;
  animal: string;
  name: string;
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 59;
  maxHours = 24;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  vertical = false;
  tickInterval = 1;
  num: number = 10;

  constructor(

  ) {
    this.time = new Time(0,0,0);
    this.display = new Display('00','00','00');
  }

  ngOnInit(): void {
  }

  join(a){
    if (a.toString().length == 1) {
      return '0' + a;
    } else if(a.toString().length > 1) {
      return a;
    }
  }

  start(){
    this.dFinish = null;
    if(this.time.seconds == 0 && this.time.minutes == 0 && this.time.hours == 0){
      return console.log(this.time);
    }

    this.chrono = setInterval(()=>{
      if (--this.time.seconds < 0) {
        this.time.seconds = 59;
        this.display.seconds = '59'
        if (--this.time.minutes < 0) {
          this.time.minutes = 59;
          this.display.minutes = '59'
          if (--this.time.hours < 0) {
            this.dFinish = "Terminado"
            clearInterval(this.chrono)
          }
        }
      }

    },1000);
  };

  match(){
    this.display.seconds = this.join(this.time.seconds);
    this.display.minutes = this.join(this.time.minutes);
    this.display.hours = this.join(this.time.hours);
  }

  pause(){
    this.buttonPlay = 'Continuar';
    clearInterval(this.chrono)
  }

  reset(){
    this.buttonPlay = 'Empezar';
    this.time = new Time(5,0,0);
    this.display = new Display('05','00','00');
    clearInterval(this.chrono)
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      this.match();
      return this.autoTicks ? 'auto' : this.tickInterval;
    }
    this.match();
    return 0;
  }

}
