import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { TimerComponent } from '../timer.component'

@Component({
  selector: 'app-modalTimerError',
  templateUrl: 'modalTimerError.html',
})
export class ModalErrorTimer {

  constructor(
    public dialogRef: MatDialogRef<ModalErrorTimer>,
    @Inject(MAT_DIALOG_DATA) public data: TimerComponent) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
