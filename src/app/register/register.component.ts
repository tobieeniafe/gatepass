import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private image: string = 'assets/img/7.jpg';
  private title: string = 'Register Page';

  constructor() { }

  ngOnInit() {
  }

}
