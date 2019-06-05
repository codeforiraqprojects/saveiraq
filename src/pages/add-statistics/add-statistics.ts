import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { StatisticsProvider } from '../../providers/statistics/statistics';
import { Statistics } from '../../models/statistics';
/**
 * Generated class for the AddStatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-statistics',
  templateUrl: 'add-statistics.html',
})
export class AddStatisticsPage {


  loading: any;

  locations:Statistics={
    key :  '',
    title:  '',
    discription:  '',
    latitude:   '',
    longitude:   '',
    author:  '',
    date:   '',
    province:   '' ,
    show: 'false',
    like:'0',
    dislike:'0' 
  }



  
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public newsProvider: StatisticsProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {

    let loginStatus = localStorage.getItem("login");
    if (loginStatus !== 'true') {
      this.navCtrl.setRoot(LoginPage);
    } 
    
 
  }


  addLocation(locations:Statistics){
    this.showLoader();
    this.newsProvider.addChallenge(locations).then(ref =>{
      console.log(locations)
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
