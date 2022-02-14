import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusBookingService {

  tickets: any = [];

  constructor() { }

  // book Ticket
  bookTicket(val: number) {
    this.tickets.push(val)
  }

  // get Ticket
  getTicket(){
    return this.tickets;
  }


}
