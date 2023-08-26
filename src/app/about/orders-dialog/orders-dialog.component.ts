import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuoteService } from '@app/home/quote.service';

@Component({
  selector: 'app-orders-dialog',
  templateUrl: './orders-dialog.component.html',
  styleUrls: ['./orders-dialog.component.scss'],
})
export class OrdersDialogComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<OrdersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public quote: QuoteService
  ) {}
  stocks: any = [];

  ordersForm = new FormGroup({
    stockId: new FormControl(null, []),
    price: new FormControl(null, []),
    quantity: new FormControl(null, []),
    personName: new FormControl('', []),
    stockName: new FormControl('', []),
    id: new FormControl(null, []),
  });

  orderHolder: any = {};

  ngOnInit(): void {
    this.getStocksData();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  getStocksData() {
    this.quote.stocksArray.subscribe((stocks) => {
      this.stocks = stocks;
    });
  }

  setStockPrice(event: any) {
    this.stocks.map((stock: any) => {
      if (stock.stockName === event.value) {
        this.ordersForm.get('price')?.setValue(stock.price);
        this.ordersForm.get('stockId')?.setValue(stock.id);
      }
    });
  }

  createOrder() {
    this.orderHolder = this.ordersForm.getRawValue();

    this.ordersForm.reset();

    this.dialogRef.close(this.orderHolder);
  }
}
