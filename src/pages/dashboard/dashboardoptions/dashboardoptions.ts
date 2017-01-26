import {Component} from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import {AngularFire} from 'angularfire2';
import {HomePage} from '../../home/home';

@Component({
selector:'app-dashboard-options',
templateUrl:'./dashboardoptions.html'
})

export class DashboardOptions{

constructor(private viewController:ViewController
            ,public angfire:AngularFire,
            public navctrl:NavController){}

onAction(action:string){
this.viewController.dismiss({action:action});
console.log("action := "+action)
if(action == "logout"){
    this.Logout();
}
}

Logout(){
this.angfire.auth.logout()
.then(()=>{console.log("logout happened successfully")
    this.navctrl.setRoot(HomePage);
})
.catch(()=>{console.log("error occured during logout")});
}


}