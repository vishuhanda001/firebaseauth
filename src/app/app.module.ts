import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule ,AuthProviders,AuthMethods} from 'angularfire2';
import {LoginComponent} from '../pages/login/login';
import {SignupComponent} from '../pages/signup/signup';
import {DashboardPage} from '../pages/dashboard/dashboard';
import {DashboardOptions} from '../pages/dashboard/dashboardoptions/dashboardoptions';


export const firebaseconfig = {
  apiKey: "AIzaSyCrdTV-NyjWlDyTXLfOh6CQZirrGbdyXxk",
  authDomain: "mybooklist-d7053.firebaseapp.com",
  databaseURL: "https://mybooklist-d7053.firebaseio.com",
  storageBucket: "mybooklist-d7053.appspot.com",
  messagingSenderId: "151481158571"
};

export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginComponent,
    SignupComponent,
    DashboardPage,
    DashboardOptions
  ],
  imports: [
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp,{
      platforms:{
        iconMode:'ios',
        android:{
          tabsHideOnSubPages:true,
          pageTransition:'android',
          alertEnter:'alert-md-pop-in',
          loadingEnter:'loading-md-pop-in'
        }
      }
    }),
    AngularFireModule.initializeApp(firebaseconfig,firebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginComponent,
    SignupComponent,
    DashboardPage,
    DashboardOptions
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
