import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Agent1Component } from './agent1/agent1.component';
import { Agent2Component } from './agent2/agent2.component';
import { BusBookingService } from './services/bus-booking.service';

@NgModule({
  declarations: [
    AppComponent,
    Agent1Component,
    Agent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BusBookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
