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



  start(){


    //for (const a of this.reps) {
      /*this.display.seconds = '00';
      this.display.minutes = '01';
      this.time.seconds = 0;
      this.time.minutes = 1;*/
      for (let i = 0; i < this.reps.length; i++) {

        console.log('reps ' + this.reps.length)


        this.chrono = setInterval(()=>{

        if (--this.time.seconds < 0) {
          this.time.minutes = 0;
          this.display.minutes = '0';
          this.time.seconds = 59;
        }
        //console.log(this.join(this.time.seconds))
        this.display.seconds = this.join(this.time.seconds);

        if (this.time.seconds == 0 && this.time.minutes == 0) {
          clearInterval(this.chrono)
        }

        },1000);
      }
      /*if (++this.count < this.reps.length) {
        console.log('cuantas ' + this.count)
        console.log('reps ' + this.reps.length)
        this.start()
      }*/

  }

  apply(){
    //console.log(this.checkoutForm.value.reps);
    let num = this.checkoutForm.value.reps
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
