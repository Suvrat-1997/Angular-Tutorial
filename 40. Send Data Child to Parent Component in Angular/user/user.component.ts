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
    this.childComponent.emit('Hello World');  // passing message
    // this.childComponent.emit({
    //   name: 'Rahul',
    //   age: 25
    // });  // passing object
  }

}
