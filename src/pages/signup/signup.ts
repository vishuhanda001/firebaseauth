import { DashboardPage } from '../dashboard/dashboard';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {LoadingController,NavController} from 'ionic-angular';


@Component({
    selector:'app-signup',
    templateUrl:'./signup.html'
})



export class SignupComponent implements OnInit{

SignupForm:FormGroup;

constructor(public formBuilder:FormBuilder,
            public afauth:AngularFire,
            public loadingctrl:LoadingController,
            public navctrl:NavController){}

ngOnInit(){

       this.SignupForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
 

}

  signUpForm(){
    console.log(this.SignupForm.value);
    let loading = this.loadingctrl.create({
        content:"Please Wait you are getting Signed In",

    });

    loading.present();
    this.afauth.auth.createUser({
      email:this.SignupForm.value.username,
      password:this.SignupForm.value.password
    }).then((success)=>{
        console.log('success');
        //transit to dashboard page
        this.navctrl.push(DashboardPage);


        loading.dismiss();
    })
      .catch((error)=>{console.log('error')
        loading.dismiss();
});

        this.SignupForm.reset();

  }



}