import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router'; //the CanActivate is to  to portect
import {AuthService} from './auth.service'


@Injectable()

export class AuthGuard implements CanActivate{

    constructor(private _auth:AuthService, private _router:Router){

    }
    canActivate(){
      if(this._auth.loggedIn()){
        console.log(this._auth.loggedIn())
        return true
      }else{
        this._router.navigate(['/login'])
        return false
      }
    }
}
