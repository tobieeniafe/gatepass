import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';


@Component({
  selector: 'login',
  templateUrl: `./login.component.html`,
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})

export class LoginComponent implements OnInit {
  private image: string = 'assets/img/7.jpg';
  private title: string = 'Login Page';
  responseStatus:Object= [];

  public loginDetails:any = {
    email: '',
    password: ''
  }

  constructor(private _loginService: LoginService,private router: Router) { }

  ngOnInit() { }

  login(e, p){
    this.loginDetails.email = e;
    this.loginDetails.password = p;
    this._loginService.loginUser(this.loginDetails).subscribe(
       data => {
         //console.log(this.responseStatus = data);
         if (data.status == true) {
             //console.log(data.token);
             this.router.navigate(["/dashboard"]);
             localStorage.setItem('gatepassToken', JSON.stringify({ token: data.token}));
             let gatepassToken = JSON.parse(localStorage.getItem('gatepassToken'));
             let token = gatepassToken.token;
         }else{
           console.log('Login failed');
         }
       },
       err => console.log(err),
       () => console.log('Login Completed')
    );
  }

}
