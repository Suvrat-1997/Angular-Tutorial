import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name = '';

  constructor(private _router: ActivatedRoute) {
    this._router.params.subscribe(params => {
      this.name = params['username']
    })
  }

  ngOnInit(): void {
  }

}
