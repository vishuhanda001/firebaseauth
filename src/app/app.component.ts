import { Component,OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {AngularFire} from 'angularfire2';
import { HomePage } from '../pages/home/home';
import {DashboardPage} from '../pages/dashboard/dashboard';


@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {

rootPage:any= HomePage;

  constructor(platform: Platform,public angfire:AngularFire
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

ngOnInit(){
  this.angfire.auth.subscribe((loggedinuser)=>{console.log(loggedinuser)
  if(loggedinuser != null){
    this.rootPage =DashboardPage
    // this.navctrl.setRoot(DashboardPage); 
  } 
  else
  {
  this.rootPage = HomePage;  } 
  });

}

}
