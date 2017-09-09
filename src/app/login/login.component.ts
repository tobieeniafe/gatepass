import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: `./login.component.html`,
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  private image: string = 'assets/img/7.jpg';
  private title: string = 'Login Page';

  constructor (){}

}
