import { Component } from '@angular/core';

/*

                          Singleton Object in Angular

Services are a great way to share information among classes that don't know each other.

==> ng g c services/bus-booking

==> ng g c agent1
==> ng g c agent2

==> bus-booking.service.ts

tickets: any = [];

  // book Ticket
  bookTicket(val: number) {
    this.tickets.push(val)
  }

  // get Ticket
  getTicket(){
    return this.tickets;
  }

==> app.module.ts

import { BusBookingService } from './services/bus-booking.service';

providers: [BusBookingService] // Module Level Service(singleton object concept)

If we do Component level service instead of module level(multiple Object concept)

==> agent1.component.ts

import { BusBookingService } from '../services/bus-booking.service';

ticket1: any = [];

  constructor(private _busBookingService: BusBookingService) { 
    this.ticket1 = this._busBookingService.getTicket();
  }

  ngOnInit(): void {
  }

  ticketBook(ticketNo: any){
    this._busBookingService.bookTicket(ticketNo);
  }

==> agent1.component.html

<input type="text" #agent1> &nbsp;
<input type="submit" (click)="ticketBook(agent1.value)" value="Book Ticket">
<ul>
    <li *ngFor="let tckt of ticket1;">{{tckt}}</li>
</ul>


==> agent2.component.ts

import { BusBookingService } from '../services/bus-booking.service';

ticket2: any = [];

  constructor(private _busBookingService: BusBookingService) { 
    this.ticket2 = this._busBookingService.getTicket();
  }

  ngOnInit(): void {
  }

  ticketBook(ticketNo: any){
    this._busBookingService.bookTicket(ticketNo);
  }

==> agent2.component.html

<input type="text" #agent2> &nbsp;
<input type="submit" (click)="ticketBook(agent2.value)" value="Book Ticket">
<ul>
    <li *ngFor="let tckt of ticket2;">{{tckt}}</li>
</ul>

==> app. component.html

<div style="text-align: center;">
    <app-agent1></app-agent1>
    <app-agent2></app-agent2>
</div>


*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  userDetails: any;

  constructor() {}




}
