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

  updateUser(){
    let userDetails = {
      fullname: this.user.fullname,
      email: this.user.email,
      phone: this.user.phone,
      currentPassword: this.user.currentPassword,
      newPassword: this.user.newPassword
    }
    console.log(userDetails)
    // this.profileService.updateUser(userDetails).subscribe(
    //    data => {
    //      console.log(data)
    //    },
    //    err => Materialize.toast("Something's not right", 1500, 'red white-text'),
    //    () => console.log()
    // );
  }

}
