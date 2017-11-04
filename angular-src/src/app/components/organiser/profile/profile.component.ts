import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
declare var Materialize: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  avatar: string = 'assets/img/avatar.jpg';
  user: any = {};
  isDisabled: boolean = false;
  constructor(private profileService: ProfileService, private router: Router, private http: Http) { 
  	this.getUser()
  }

  ngOnInit() {}


  getUser(){
    this.profileService.getUser().subscribe(
       data => {
         this.user = data.organiser;
         if (data.status == true) { 
           this.avatar = 'https://image.devidentify.com/'+this.user.email
         } else {
         	 Materialize.toast("Something's not right", 1500, 'red white-text')
         }
       },
       err => Materialize.toast("Something's not right", 1500, 'red white-text'),
       () => console.log()
    );
  }

  updateUser(fn, pn, e, cp, np){
    this.isDisabled = true
    let userDetails = {
      fullname: fn,
      email: e,
      phone: pn,
      currentPassword: cp,
      newPassword: np
    }
    //console.log(userDetails)
    this.profileService.updateUser(userDetails).subscribe(
       data => {
         if (data.status == true) { 
           Materialize.toast("User updated", 1500, 'green white-text')
           this.isDisabled = false
         } else {
           Materialize.toast("Error occured", 1500, 'red white-text')
           this.isDisabled = false
         }
       },
       err => Materialize.toast("Something's not right", 1500, 'red white-text'),
       () => console.log()
    );
  }

}
