import { Component, OnInit } from '@angular/core';
import { UserDataService } from './../services/user-data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerArr: any;

  constructor(private _service: UserDataService) { }

  ngOnInit(): void {
    this.customerArr = this._service.getCustomerData();
  }

}
