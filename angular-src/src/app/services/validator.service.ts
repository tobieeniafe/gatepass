import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorService {

  constructor() { }
  ValidateRegister(user){
    if(user.fullname == undefined || user.email == undefined || user.password == undefined || user.phone == undefined || user.username == undefined){
      return false
    }else{
      return true
    }
  }
  ValidateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
