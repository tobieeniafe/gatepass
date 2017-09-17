import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
declare var Materialize: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  constructor(public _auth:AuthService, private router: Router) {
    console.log(this._auth.loggedIn())
   }

  ngOnInit() {
  }

  setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  logOut(){
    console.log('logged out');
      Materialize.toast('Logout successful', 5000, 'green white-text');
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      this.setLoggedIn(false);
  }

}
