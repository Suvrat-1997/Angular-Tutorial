import { Component, OnInit } from '@angular/core';


/*
                                Date and Time Difference from Current Date in Angular

==> 
==> app.component.html


    <label for="">Enter Date: </label> <br>
    <input type="date" name="start-date" [(ngModel)]="enterDate" > <br> <br>

    <input type="submit" value="submit" (click)="getValue()">

==> app.component.ts

enterDate: any;
today = Date.now();

getValue(){

// calculation of no. of days between two date 

// To set two dates to two variables
var date1 = new Date(this.startDate);
var date2 = new Date(this.endDate);

// To calculate the time difference of two dates
var Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

console.log(Difference_In_Time);
console.log(Difference_In_Days);


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

  enterDate: any;
  today = Date.now();

  ngOnInit(): void {

  }

  getValue() {

    // calculation of no. of days between two date 

    // To set two dates to two variables
    var date1 = new Date(this.enterDate);
    var date2 = new Date(this.today);

    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    console.log('Difference_In_Time: ', Difference_In_Time);
    console.log('Difference_In_Days', Difference_In_Days);

  }

}


