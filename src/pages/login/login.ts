import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  
  
data = {
  email:  '',
  password: ''
}
loading: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authServiceProvider:AuthProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login(){
    this.showLoader();
    let credentials = {
email: this.data.email,
password: this.data.password
    }

this.authServiceProvider.signInWithEmail(credentials).then(
  
  ()=> {
    localStorage.setItem("login", "true");
    this.loading.dismiss();
    this.navCtrl.setRoot(TabsPage)
  },
  (error) => {
    this.showAlert('خطأ' , "تاكد من معلوماتك")
    this.loading.dismiss();
  } 
)

  }




goToRegister(){
  this.navCtrl.push(RegisterPage)
}



showLoader(){
   
  this.loading = this.loadingCtrl.create({
    content: "  لطفا انتظر قليلا",
  });

  this.loading.present();

}
showAlert(titles , subTitles) {
  let alert = this.alertCtrl.create({
    title: titles,
    subTitle: subTitles,
    buttons: ['OK']
  });
  alert.present();
}






}