import { Component, OnInit } from '@angular/core';


/*
                                Event Binding in Angular


==> app.component.html

<button (click)="myEvent('This is Click Event')">Click Me</button>
<input type="text" (keyup)="myEvent1('This is Keyup Event')" placeholder="keyup event"> 
<input type="text" #box (keyup)="myEvent2(box.value)" placeholder="keyup event">
<input type="text" #box1 (keyup.enter)="myEvent3(box1.value)" placeholder="keyup.enter event"> 
<input type="text" #box2 (keydown)="myEvent4(box2.value)" placeholder="keydown event">
<input type="text" #box3 (keydown.enter)="myEvent5(box3.value)" placeholder="keydown.enter event">
<input type="text" #box4 (keydown.space)="myEvent6(box4.value)" placeholder="keydown.space event"> 
<input type="text" #box5 (blur)="myEvent7(box5.value)" placeholder="Blur event"> <br><br>

<div class="mouse" (mouseleave)="myEvent7('Mouse Out')" (mouseover)="myEvent8('Mouse In')">
    <h2>Mouse Event</h2>
</div>

==> app.component.ts

  myEvent(evt: any){
    console.warn(evt);
  }

  myEvent1(evt: any){
    console.warn(evt);
  }

  myEvent2(evt: any){
    console.warn(evt);
  }

  myEvent3(evt: any){
    console.warn(evt);
  }

  myEvent4(evt: any){
    console.warn(evt);
  }

  myEvent5(evt: any){
    console.warn(evt);
  }

  myEvent6(evt: any){
    console.warn(evt);
  }
  myEvent7(evt: any){
    console.warn(evt);
  }
  myEvent8(evt: any){
    console.warn(evt);
  }
  myEvent9(evt: any){
    console.warn(evt);
  }


==> index.html

<body>
  <app-root></app-root>
</body>



*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';

  ngOnInit(): void {
  }

  myEvent(evt: any){
    console.warn(evt);
  }

  myEvent1(evt: any){
    console.warn(evt);
  }

  myEvent2(evt: any){
    console.warn(evt);
  }

  myEvent3(evt: any){
    console.warn(evt);
  }

  myEvent4(evt: any){
    console.warn(evt);
  }

  myEvent5(evt: any){
    console.warn(evt);
  }

  myEvent6(evt: any){
    console.warn(evt);
  }
  myEvent7(evt: any){
    console.warn(evt);
  }
  myEvent8(evt: any){
    console.warn(evt);
  }
  myEvent9(evt: any){
    console.warn(evt);
  }

}


