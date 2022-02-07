import { Component } from '@angular/core';

/*

                              Interpollation in Angular


==> app.component.ts

  title = 'Me';
  name = 'Rahul Boxi';
  myObj = {
    name: 'Samrat Jana',
    age: 25,
    addr: 'MDN'
  };
  myArr = ['A', 'E', 'I', 'O', 'U'];
  siteUrl = window.location.href;
  profile = 'Student';

  getName(){
    return this.name;
  }
  
  showProfile(name: any){
    alert('You are: '+name);
  }


==> app.component.html

    <p>{{title}}</p>
    <p>{{getName()}}</p>
    <p>Name: {{myObj.name}}</p>
    <p>Age: {{myObj.age}}</p>
    <p>Address: {{myObj.addr}}</p>
    <p>{{siteUrl}}</p>
    <p>{{myArr}}</p>
    <p>{{myArr[0]}}</p>
    <p>{{myArr[3]}}</p>
    <p>Array Length: {{myArr.length}}</p>

<button type="button" (click)="showProfile(profile)">Show Profile</button>


*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Me';
  name = 'Rahul Boxi';
  myObj = {
    name: 'Samrat Jana',
    age: 25,
    addr: 'MDN'
  };
  myArr = ['A', 'E', 'I', 'O', 'U'];
  siteUrl = window.location.href;
  profile = 'Student';

  getName(){
    return this.name;
  }

  showProfile(name: any){
    alert('You are: '+name);
  }

}
