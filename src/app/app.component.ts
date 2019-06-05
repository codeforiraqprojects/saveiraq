import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(
    platform: Platform, statusBar: StatusBar, 
    public authServiceProvider:AuthProvider , 
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });




    this.authServiceProvider.afAuth.authState.subscribe(
      user =>{
        if (user) {
          console.log( user.email )
          console.log( user.uid )
          localStorage.setItem("email", user.email);
          localStorage.setItem("uid", user.uid);
        } else {
          console.log( 'no user' )
          localStorage.setItem("email", '');
          localStorage.setItem("uid", '');
        }
      },
      ()=>{
        console.log( 'no user' )
      }
    )




  }
 

}
