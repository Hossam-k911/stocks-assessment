import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouteReusableStrategy, ApiPrefixInterceptor, ErrorHandlerInterceptor, SharedModule } from '@shared';
import { MarketModule } from './market/market.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BootstrapModalModule } from 'ngx-bs-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OrdersDialogComponent } from './orders/orders-dialog/orders-dialog.component';
import { MatDialogModule, MatDialogContainer } from '@angular/material/dialog';
// import { ToastrModule } from 'ngx-toastr'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot(),
    NgbModule,
    SharedModule,
    ShellModule,
    MarketModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
    // BootstrapModalModule.forRoot({ container: document.body }),
    BrowserAnimationsModule,
    MatDialogModule,
    // ToastrModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
