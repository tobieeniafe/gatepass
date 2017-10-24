import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import {AuthService} from '../../services/auth.service'
import {ValidatorService} from '../../services/validator.service'

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
  isDisabled: boolean = false;

  public location = '' ;
  ngOnInit (){

  }
  constructor(private _auth:AuthService, private _validateService: ValidatorService,private _router:Router){

  }

  onRegisterSubmit(){
    this.isDisabled = true;
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
     this._auth.registerUser(user).subscribe(
       data => {
           if (data.status == false) {
             Materialize.toast(data.message+'s', 3000, 'red white-text');
             this.isDisabled = false;
           }else if(data.status == true){
             Materialize.toast('Registration successful', 3000, 'green white-text');
             localStorage.setItem('token', data.token);
             //console.log(localStorage.setItem('token', data.token));
             this._router.navigate(['/events']);
             this.isDisabled = false;
           }else{
             this._router.navigate(['/register'])
             this.isDisabled = false;
           }
     },
     err => Materialize.toast("Something's not right", 1500, 'red white-text'),
     () =>  console.log()
   );

  }
}
