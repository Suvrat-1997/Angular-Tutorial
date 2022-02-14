import { Component } from '@angular/core';

/*

                          Session Managment in Angular


Web Storage in Angular

Data Storage:

1. Cookies (Client Side) before HTML 5

Now after HTML 5 we have two option Session storage or Local storage
-----------------------------------------------------------------------

Local storage:

(No expiry date, need to delete manually)

1. set localStorage:

==> localStorage.setItem('userName', 'Asish Boxi');

2. get localStorage:

==> localStorage.getItem('userName')

--------------------------------------------------------------------------

Session storage: store data for only one session

(expiry after browser close)


How to remove and clear local storage or session storage data?

1. removeItem()
2. clear()

How to store json object in Local Storage or Session Storage?

let userObj = {name: 'Asit', age: 25, email: 'asit25@gmail.com'};

==> set Data

localStorage.setItem('custData', JSON.stringfy(userObj));

==> get Data

let userData = JSON.parse(localStorage.getItem('custData'))


==> How to Check localStorage and sessionStorage data?

=> Browser ==> inspect ==> Application ==> localStorage/sessionStorage



==> ng g c user
==> ng g c admin




==> app.component.ts




*/



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  constructor() {}

}
