import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from './register.service';
import{ User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[RegisterService]
})

export class RegisterComponent implements OnInit {

  private image: string = 'assets/img/7.jpg';
  private title: string = 'Register Page';

  constructor(private _registrationService: RegisterService,private router: Router) { }
  @Input() user: User;
  responseStatus:Object= [];
  status:boolean ;

  public location = '' ;

  ngOnInit() {
    //this.user = new User();
  }

  register(f, u, t, e, p){
    this.user = new User();
    this.user.fullname = f;
    this.user.username = u;
    this.user.phone = t;
    this.user.email = e;
    this.user.password = p;
    //console.log(this.user);
    this._registrationService.registerUser(this.user).subscribe(
       data => {
         console.log(this.responseStatus = data);
         this.router.navigate(["/dashboard"]);
         this.status = true;
       },
       err => console.log(err),
       () => console.log('Request Completed')
    );
  }

}
