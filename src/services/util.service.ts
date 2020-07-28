import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
declare var $;
@Injectable({
  providedIn: 'root'
})
export class UtilService {


  constructor(private snackBar: MatSnackBar, private zone: NgZone) { }

  openSnackBar(message: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'right';
    config.panelClass = ['snakbar-class'];
    config.duration = 2000;
    this.snackBar.open(message, 'Close', config);
  }
 
}
