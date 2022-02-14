import { Component, OnInit } from '@angular/core';
import { BusBookingService } from '../services/bus-booking.service';

@Component({
  selector: 'app-agent2',
  templateUrl: './agent2.component.html',
  styleUrls: ['./agent2.component.css']
})
export class Agent2Component implements OnInit {

  ticket2: any = [];

  constructor(private _busBookingService: BusBookingService) { 
    this.ticket2 = this._busBookingService.getTicket();
  }

  ngOnInit(): void {
  }

  ticketBook(ticketNo: any){
    this._busBookingService.bookTicket(ticketNo);
  }

}
