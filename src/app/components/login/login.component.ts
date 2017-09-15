import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import {AuthService} from '../../services/auth.service'


@Component({
  selector: 'login',
  templateUrl: `./login.component.html`,
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  private image: string = 'assets/img/7.jpg';
  private title: string = 'Login Page';
  responseStatus:Object= [];
  email:String;
   password:String;


  constructor(private router: Router, private _auth:AuthService, private _router:Router) { }

  ngOnInit() { }
  onLoginSubmit(){
      const user = {
        email:this.email,
        password: this.password
      }
      console.log("Hello")

      this._auth.loginUser(user).subscribe(data => {
        if(data.status){
          localStorage.setItem('token', data.token);
          this._router.navigate(['/events'])
        }else{
          this._router.navigate(['/login'])
        }
      })
    }
}
