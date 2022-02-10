import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() childComponent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendData(){
    let item = {
      name: 'Laptop',
      price: 15000,
      color: 'red'
    }
  this.childComponent.emit(item)
  }
  
}
