import { Component, OnInit, Input } from '@angular/core';

import {AuthService} from '../../services/auth.service'
import {ValidatorService} from '../../services/validator.service'

import { Router, ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';

declare var Materialize: any;

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  private image: string = 'assets/img/7.jpg';
  private title: string = 'Register Page';

  responseStatus:Object= [];
  fullname:String;
  username:String;
  phone:String;
  password:String;
  email:String;
  public location = '' ;
  ngOnInit (){

  }
  constructor(private _auth:AuthService, private _validateService: ValidatorService,private _router:Router){

  }

  onRegisterSubmit(){
    const user = {
      fullname: this.fullname,
      username: this.username,
      phone: this.username,
      password: this.password,
      email: this.email
    }
    //console.log(user)
    if(!this._validateService.ValidateRegister(user)){
       //Show flash or something
       console.log("err")
       return false
     }
     //validate email
     if(!this._validateService.ValidateEmail(user.email)){
       //Flash flash flash flash
       console.log("err")
       return false
     }
     this._auth.registerUser(user).subscribe(data => {
       console.log(data);
       if (data.status == false) {
         Materialize.toast(data.message+'s', 5000, 'red white-text');
       }else if(data.status == true){
         //Flash message
         Materialize.toast('Registration successful', 5000, 'green white-text');
         localStorage.setItem('token', data.token);
         console.log(localStorage.setItem('token', data.token));
         this._router.navigate(['/events'])
       }else{
         //Flash message
         this._router.navigate(['/register'])
       }
     })
  }
}
