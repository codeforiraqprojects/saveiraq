import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  
  loading: any;

data = {
  email:  '',
  password: ''
}



  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authServiceProvider:AuthProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  register(){
    this.showLoader();

    let credentials = {
      email: this.data.email,
      password: this.data.password
          }
      
      this.authServiceProvider.signUp(credentials).then(
        ()=> {
          localStorage.setItem("login", "true");
          this.loading.dismiss();
          this.navCtrl.setRoot(TabsPage)
        },
        (error) =>{
          this.showAlert('خطأ' , "تاكد من معلوماتك")
          this.loading.dismiss();
          console.log('error')
        } 
      )

  }


  login(){
    this.navCtrl.setRoot(LoginPage)
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