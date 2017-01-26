
import { Component } from '@angular/core';
import {SignupComponent} from '../signup/signup';
import {LoginComponent} from '../login/login';
import {AngularFire} from 'angularfire2';

@Component({
  templateUrl: './home.html'
})
export class HomePage //OnInit 
{

tab1Root:any;
tab2Root:any;

  constructor(public angfire:AngularFire) {
                this.tab1Root = SignupComponent;
                this.tab2Root = LoginComponent; 
}







}