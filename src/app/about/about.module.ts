import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { OrdersDialogComponent } from './orders-dialog/orders-dialog.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';

@NgModule({
  imports: [CommonModule, TranslateModule, AboutRoutingModule, MatDialogModule],
  declarations: [AboutComponent, OrdersDialogComponent],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
  // entryComponents: [
  //   MatDialog, OrdersDialogComponent
  // ],
})
export class AboutModule {}
