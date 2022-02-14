import { Component, OnInit } from '@angular/core';
import { BusBookingService } from '../services/bus-booking.service';

@Component({
  selector: 'app-agent1',
  templateUrl: './agent1.component.html',
  styleUrls: ['./agent1.component.css']
})
export class Agent1Component implements OnInit {

  ticket1: any = [];

  constructor(private _busBookingService: BusBookingService) { 
    this.ticket1 = this._busBookingService.getTicket();
  }

  ngOnInit(): void {
  }

  ticketBook(ticketNo: any){
    this._busBookingService.bookTicket(ticketNo);
  }

}
