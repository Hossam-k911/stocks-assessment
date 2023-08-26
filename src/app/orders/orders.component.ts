import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { OrdersDialogComponent } from './orders-dialog/orders-dialog.component';
import { MatDialogContainer } from '@angular/material/dialog';
import { QuoteService } from '@app/market/quote.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  ordersData: any = [];
  // dialogConfig: MatDialogConfig;

  constructor(public dialog: MatDialog, public quote: QuoteService) {}

  ngOnInit() {}

  openOrderDialog() {
    let dialogRef = this.dialog.open(OrdersDialogComponent, {
      data: {
        name: 'hossam',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ordersData.push(result);
    });
  }
}
