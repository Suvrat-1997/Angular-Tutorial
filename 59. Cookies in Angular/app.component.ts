import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

/*

                                              Cookies in Angular

A cookie is a small piece of data sent from a website and stored on the user's machine by the user's web browsers while the user is browsing.

Cookies are small packages of information that are typically stored in your browsers and websites tend to use for multiple things.

Cookies persist across multiple requests and browser sessions should you set them to and they can be a great method for authentication in some web apps.


                Method of Cookies in Angular

Check :- Used to check cookies exits or not
Set :- Used to set the value in cookies with name
Get :- Used to return the single value of stored cookies name
Get All :- Used to return a value object of all cookies
Delete :- Used to delete the single cookies value with the given name
Delete All :- Used to delete all the cookies


Cookie install in your project:

==> npm i --save ngx-cookie-service 


==> app.module.ts

import { CookieService } from 'ngx-cookie-service';

providers: [CookieService]

  ==> app.component.ts

  import { CookieService } from 'ngx-cookie-service';

  constructor(private cookieService: CookieService){}

  getMethod(){
    this.cookieService.set('name', 'Rahul');
    this.cookieService.set('userType', 'Admin');
    alert(this.cookieService.get('name'));
    console.log(this.cookieService.getAll());
    this.cookieService.delete('name');
    console.log(this.cookieService.getAll());
  }

==> app.component.html

<button type="button" (click)="getMethod()">Click Me</button>

see Cookie in browser:

browser ==> inspect ==> application ==> cookie(refresh)


*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  constructor(private cookieService: CookieService) { }

  getMethod() {
    this.cookieService.set('name', 'Rahul');
    this.cookieService.set('userType', 'Admin');
    alert(this.cookieService.get('name'));
    console.log(this.cookieService.getAll());
    this.cookieService.delete('name');
    console.log(this.cookieService.getAll());
  }

}
