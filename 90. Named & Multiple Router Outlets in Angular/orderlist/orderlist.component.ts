import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Order {
  item: string,
  price: number,
  quantity: number,
  color: string
}

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  orderDetails: Order = {
    item: "Laptop",
    price: 35000,
    quantity: 5,
    color: "black"
  };

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

    close(){
      this._router.navigate([{outlets:{'orderList': null}}])
    }

}
