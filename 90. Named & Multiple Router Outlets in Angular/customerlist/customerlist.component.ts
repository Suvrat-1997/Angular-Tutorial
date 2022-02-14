import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  customerArr: any;

  constructor(private _service: UserDataService, private _router: Router) { }

  ngOnInit(): void {
    this.customerArr = this._service.getCustomerData();
  }

  close(){
    this._router.navigate([{outlets:{'customerList': null}}])
  }

}
