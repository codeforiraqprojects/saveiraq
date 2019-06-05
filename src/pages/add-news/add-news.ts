import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { NEWS } from '../../models/news';
import { LoginPage } from '../login/login';

/**
 * Generated class for the AddNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-news',
  templateUrl: 'add-news.html',
})
export class AddNewsPage {

  loading: any;

  locations:NEWS={
    key : '',
    title : '',
    discription : '',
    latitude : '',
    longitude: '',
    author: '',
    date: '',
    province: '',
    show : 'false' 
  }

  
 
 
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public newsProvider: NewsProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {

    let loginStatus = localStorage.getItem("login");
    if (loginStatus !== 'true') {
      this.navCtrl.setRoot(LoginPage);
    } 
    
 
  }


  addLocation(locations:NEWS){
    this.showLoader();
    this.newsProvider.addChallenge(locations).then(ref =>{
      this.showAlert("شكرا" , "سيتم التدقيق واضافة البيانات قريبا")
      this.loading.dismiss();
      this.navCtrl.pop()
    })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad DonorsPage');

    
  }

  
  showLoader(){
   
    this.loading = this.loadingCtrl.create({
      content: " لطفا انتظر قليلا",
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
