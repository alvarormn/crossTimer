import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavComponent } from './components/nav/nav.component';
import { ChronometerComponent } from './components/chronometer/chronometer.component';
import { TimerComponent } from './components/timer/timer.component';
import { EmonComponent } from './components/emon/emon.component';
import { IntervalComponent } from './components/interval/interval.component';


import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ChronometerComponent,
    TimerComponent,
    EmonComponent,
    IntervalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavComponent
  ]
})
export class AppModule { }
