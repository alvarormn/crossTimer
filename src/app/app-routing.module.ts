import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChronometerComponent } from './components/chronometer/chronometer.component'
import { TimerComponent } from './components/timer/timer.component';
import { EmonComponent } from './components/emon/emon.component';
import { IntervalComponent } from './components/interval/interval.component';


const routes: Routes = [
  {
    path: '',
    component: ChronometerComponent
  },{
    path: 'chronos',
    component: ChronometerComponent
  },{
    path: 'timer',
    component: TimerComponent
  },{
    path: 'interval',
    component: IntervalComponent
  },{
    path: 'emon',
    component: EmonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
