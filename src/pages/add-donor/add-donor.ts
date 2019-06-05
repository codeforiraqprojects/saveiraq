import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { DonorsProvider } from '../../providers/donors/donors';
import { Donors } from '../../models/donors';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-add-donor',
  templateUrl: 'add-donor.html',
})
export class AddDonorPage {

  loading: any;

  locations:Donors={
    key : '',
    name : '',
    amount : '',
     paidBy: '',
    show : 'false',
    province: '',
  }

 
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public donorsProvider: DonorsProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {

    let loginStatus = localStorage.getItem("login");
    if (loginStatus !== 'true') {
      this.navCtrl.setRoot(LoginPage);
    } 
    
 
  }


  addLocation(locations:Donors){
    this.showLoader();
    this.donorsProvider.addChallenge(locations).then(ref =>{
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
