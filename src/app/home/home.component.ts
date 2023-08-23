import { Component, OnDestroy, OnInit, Output, OnChanges, DoCheck } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { QuoteService } from './quote.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // initializing usable data

  stocksData: any = [
    {
      stockName: 'Vianet',
      id: 0,
      price: 0,
    },
    {
      stockName: 'Agritek',
      id: 0,
      price: 0,
    },
    {
      stockName: 'Akamai',
      id: 0,
      price: 0,
    },
    {
      stockName: 'Baidu',
      id: 0,
      price: 0,
    },
    {
      stockName: 'Blucora',
      id: 0,
      price: 0,
    },
    {
      stockName: 'Boingo',
      id: 0,
      price: 0,
    },
    {
      stockName: 'Brainybrawn',
      id: 0,
      price: 0,
    },
    {
      stockName: 'Carbonite',
      id: 0,
      price: 0,
    },
    {
      stockName: 'China Finance',
      id: 0,
      price: 0,
    },
    {
      stockName: 'ChinaCache',
      id: 0,
      price: 0,
    },
    {
      stockName: 'ADR',
      id: 0,
      price: 0,
    },
    {
      stockName: 'ChitrChatr',
      id: 0,
      price: 0,
    },
    {
      stockName: 'Cnova',
      id: 0,
      price: 0,
    },
    {
      stockName: 'Cogent',
      id: 0,
      price: 0,
    },
    {
      stockName: 'Crexendo',
      id: 0,
      price: 0,
    },
    {
      stockName: 'CrowdGather',
      id: 0,
      price: 0,
    },
    {
      stockName: 'EarthLink',
      id: 0,
      price: 0,
    },
    {
      stockName: 'Eastern',
      id: 0,
      price: 0,
    },
    {
      stockName: 'ENDEXX',
      id: 0,
      price: 0,
    },
    {
      stockName: 'Envestnet',
      id: 0,
      price: 0,
    },
    {
      stockName: 'Epazz',
      id: 0,
      price: 0,
    },
    {
      stockName: 'FlashZero',
      id: 0,
      price: 0,
    },
    {
      stockName: 'Genesis',
      id: 0,
      price: 0,
    },
    {
      stockName: 'InterNAP',
      id: 0,
      price: 0,
    },
    {
      stockName: 'MeetMe',
      id: 0,
      price: 0,
    },
    {
      stockName: 'Netease',
      id: 0,
      price: 0,
    },
    {
      stockName: 'Qihoo',
      id: 0,
      price: 0,
    },
  ];

  subscription!: Subscription;
  constructor(public quote: QuoteService) {}

  ngOnInit() {
    // this.generatePrice();
    this.generateId();

    this.subscription = timer(0, 10000)
      .pipe
      // switchMap(() => this.service.getPosts())
      ()
      .subscribe((result) =>
        // console.log(result)
        this.generatePrice()
      );
  }

  generatePrice() {
    this.stocksData.map((stock: any) => {
      stock.price = Math.floor(Math.random() * 100);
    });
    this.quote.stocksArray.next(this.stocksData);
  }

  generateId() {
    this.stocksData.map((stock: any) => {
      // stock.id = Math.floor(Math.random() * 30);
      stock.id = UUID.UUID();
    });
  }
  ngOnDestroy() {
    this.quote.stocksArray.next([]);
  }
}
