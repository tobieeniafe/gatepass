import { Component, OnInit } from '@angular/core';
import{ User } from '../user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private image: string = 'assets/img/7.jpg';
  private title: string = 'Register Page';
  private user: any = new User();

  constructor() { }

  ngOnInit() {
  }

  registerUser(f, u, t, e, p){

    //console.log(`${f}\n ${u}\n ${t}\n ${e}\n ${p}`);
    this.user.fullname = f;
    this.user.username = u;
    this.user.phone = t;
    this.user.email = e;
    this.user.password = p;
    console.log(this.user);
  }

}
