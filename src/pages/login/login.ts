
import { DashboardPage } from '../dashboard/dashboard';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import {LoadingController,NavController,AlertController} from 'ionic-angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.html'
})



export class LoginComponent implements OnInit {

    loginForm: FormGroup;


    constructor(public formBuilder: FormBuilder,
     public afauth: AngularFire,
     public loadctrl:LoadingController,
     public navctrl:NavController,
     public alertctrl:AlertController) {


    }

    ngOnInit() {


        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })

        

    }





    loginform() {

let loading=  this.loadctrl.create({
    content:'User is getting logged in Please wait'
})

loading.present();

        this.afauth.auth.login({
            email: this.loginForm.value.username,
            password: this.loginForm.value.password
        }).then((success) => {
             console.log(success);


             //transit to dashboard page 
             loading.dismiss();
             this.navctrl.push(DashboardPage);
             })
            .catch((error) => { console.log(error)
                 loading.dismiss();
                 //wrong credentials
                 let alert = this.alertctrl.create({
                     title:'Kindly enter correct credentials',
                     buttons:[
                         {text:'Ok',handler:data =>{console.log("ok clicked")}}
                     ],

                 })
                 alert.present();

             })
    
        this.loginForm.reset();
}


}