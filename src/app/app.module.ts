import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkOrdersComponent } from './components/work-orders/work-orders.component';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { WorkOrderService } from './services/api/work-order.service';
import { WorkerService } from './services/api/worker.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterWorkOrderByNamePipe } from './components/work-orders/filter-work-order-by-name.pipe';

@NgModule({
  declarations: [AppComponent, WorkOrdersComponent, FilterWorkOrderByNamePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [WorkOrderService, WorkerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
