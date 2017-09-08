import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: `./login.component.html`,
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  private image: string = 'assets/img/2.png';
  private title: string = 'Login Page';

  constructor (){}

}
