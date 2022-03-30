import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() Name!: string;  
  @Output() getResponse = new EventEmitter;  
  constructor() { }  
  
  ngOnInit() {  
  }  
  
  onClick() {  
    this.getResponse.emit('Message from child');  
  } 

}
