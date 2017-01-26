import { ViewController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { AlertController,PopoverController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {DashboardOptions} from './dashboardoptions/dashboardoptions';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html'

})

export class DashboardPage implements OnInit {

    constructor(public alertctrl: AlertController,
                public popoverctrl:PopoverController,
                public angfire:AngularFire,
                public navctrl:NavController,
                public viewctrl:ViewController) {

        let alert = this.alertctrl.create({
            title: 'Congrats you are successfully Logged in',
        })
        alert.present();
        setTimeout(() => {
            alert.dismiss();
        }, 2000);

    }


    ngOnInit() {
        console.log(this.viewctrl.pageRef());

    }

    options(ev:MouseEvent){

        let popover  =  this.popoverctrl
        .create(DashboardOptions)

        popover.present({ev:ev});
    }



}