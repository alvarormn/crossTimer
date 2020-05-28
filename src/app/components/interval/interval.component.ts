import { Component, OnInit } from '@angular/core';

import { Interval } from '../../models/setInterval/setInterval';
import { Timer } from '../../models/setTimer/setTimer';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  interval: Interval;
  timer: Timer;
  minDisplay: string = '00';
  secDisplay: string = '00';
  indeterminate = false;
  labelPosition: 'before';
  disabled = false;
  reps;
  error;
  chrono;
  sound;



  constructor(

  ) {
    this.interval = new Interval(true,null,0,0,'00','00');
    this.timer = new Timer(0,0,'00','00');
  }

  ngOnInit(): void {
  }

  playAudio(a){
    if (a == 1) {
      let audio = new Audio();
      audio.src = "assets/sounds/clock1.wav";
      audio.load();
      audio.play();
    } else if (a == 2) {
      let audio = new Audio();
      audio.src = "assets/sounds/finalInterval.wav";
      audio.load();
      audio.play();
    } else if (a == 3) {
      let audio = new Audio();
      audio.src = "assets/sounds/final.wav";
      audio.load();
      audio.play();
    }

  }


  apply(){
    if (this.interval.intervals < 1) {
      this.error = 'Tiene que indicar el numero de intervalos';
    } else if(this.interval.minDis === '00' && this.interval.secDis === '00') {
      this.error = 'Tiene que indicar el tiempo de cada intervalo';
    } else {
      this.timer.minDisplay = this.interval.minDis;
      this.timer.secDisplay = this.interval.secDis;
      this.timer.min = this.interval.min;
      this.timer.sec = this.interval.sec;
      this.reps = new Array(this.interval.intervals);
      this.error = null
    }
  }

  reset(){
    this.interval = {
      sameTime: this.interval.sameTime,
      intervals: null,
      min: 0,
      sec: 0,
      minDis: this.interval.minDis,
      secDis: this.interval.secDis
    }
  }

  async start(){


    for (const key of this.reps) {

      await this.clock();
      this.timer.minDisplay = this.interval.minDis;
      this.timer.secDisplay = this.interval.secDis;
      this.timer.min = this.interval.min;
      this.timer.sec = this.interval.sec;
    }
    this.playAudio(3);
  }

  clock(){
    return new Promise(resolve =>{
      this.chrono = setInterval(()=>{
        if (this.timer.sec > 1 && this.timer.sec < 5) {
          this.playAudio(1);
        } else if (this.timer.sec == 1) {
          this.playAudio(2);
        } else if (this.timer.sec == 1 && this.reps == 1) {
          console.log('hola');

        }
        if (--this.timer.sec < 0) {

          this.timer.sec = 59;
          this.timer.secDisplay = '59';
          if (--this.timer.min < 0) {
            console.log('terminado');
            resolve();
            clearInterval(this.chrono);
          }
        }
        this.timer.minDisplay = this.join(this.timer.min);
        this.timer.secDisplay = this.join(this.timer.sec);
      },1000);
    })
  }

  addSecs(){
    if (++this.interval.sec > 59) {
      this.interval.sec = 0
    }
    this.interval.secDis = this.join(this.interval.sec);
  }
  subtractSecs(){
    if (--this.interval.sec < 0) {
      this.interval.sec = 59
    }
    this.interval.secDis = this.join(this.interval.sec);
  }

  addMins(){
    if (++this.interval.min > 59) {
      this.interval.min = 0
    }
    this.interval.minDis = this.join(this.interval.min);
  }
  subtractMins(){
    if (--this.interval.min < 0) {
      this.interval.min = 59
    }
    this.interval.minDis = this.join(this.interval.min);
  }


  join(a){
    if (a.toString().length == 1) {
      return '0' + a;
    } else if(a.toString().length > 1) {
      return a;
    }
  }

}
