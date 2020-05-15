import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Display } from '../../models/setTimeEMON/setDisplay';
import { Time } from '../../models/setTimeEMON/setTime';

@Component({
  selector: 'app-emon',
  templateUrl: './emon.component.html',
  styleUrls: ['./emon.component.css']
})
export class EmonComponent implements OnInit {
  title:string = "EMON";
  display: Display;
  time: Time;
  reps;
  checkoutForm;
  chrono;
  index;
  rounds:number = 1;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.display = new Display('00','01');
    this.time = new Time(0,1);
    this.checkoutForm = this.formBuilder.group({
      reps: 0
    });
  }



  ngOnInit(): void {
  }

  interval(){
    return new Promise(resolve =>{
      this.chrono = setInterval(()=>{
        if (--this.time.seconds < 0) {
          this.time.minutes = 0;
          this.display.minutes = '00';
          this.time.seconds = 10;
        }
        this.display.seconds = this.join(this.time.seconds);
        if (this.time.seconds === 0) {
          resolve();
          clearInterval(this.chrono);
        }
      },1000);
    })
  }



  async start(){
    this.display.minutes = '01';
    this.display.seconds = '00';
    this.time.minutes = 1;
    this.time.seconds = 0;

    for (this.index = 0; this.index < this.reps.length; this.index++) {

      await this.interval();

    }


  }

  apply(){
    //console.log(this.checkoutForm.value.reps);
    let num = this.checkoutForm.value.reps;
    this.reps = new Array(num);

  }

  join(a){
    if (a.toString().length == 1) {
      return '0' + a;
    } else if(a.toString().length > 1) {
      return a;
    }
  }

}
