import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { OrdersDialogComponent } from './orders-dialog/orders-dialog.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  ordersData: any = [];
  // dialogConfig: MatDialogConfig;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openOrderDialog() {
    let dialogRef = this.dialog.open(OrdersDialogComponent, {
      data: {
        name: 'hossam',
      },
      width: '100%',
      height: '80%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // this.animal = result;
    });
  }
}
