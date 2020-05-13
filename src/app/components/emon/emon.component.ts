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
  count = 0;

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
    return new Promise(a =>{
      let b = setInterval(()=>{
        if (--this.time.seconds < 0) {
          this.time.minutes = 0;
          this.display.minutes = '0';
          this.time.seconds = 59;
        }
        this.display.seconds = this.join(this.time.seconds);
        console.log(this.time.seconds);
        console.log(this.time.minutes);
        if (this.time.seconds === 0) {
          clearInterval(b)
        }
      },1000);

    })

  }



  async start(){
    this.display.minutes = '0';
    this.display.seconds = '10';
    this.time.minutes = 0;
    this.time.seconds = 10;

    for (let i = 0; i < this.reps.length; i++) {
      await this.interval();
      console.log(i + ' <-> ' + this.reps.length);
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
