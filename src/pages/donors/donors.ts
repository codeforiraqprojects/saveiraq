import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { DonorsProvider } from '../../providers/donors/donors';
import { Donors } from '../../models/donors';
import { AngularFireDatabase } from 'angularfire2/database';

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';


import firebase from 'firebase';

import { AddDonorPage } from '../add-donor/add-donor';


/**
 * Generated class for the DonorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donors',
  templateUrl: 'donors.html',
})
export class DonorsPage {

  loading: any;
  donorsList: Observable<Donors[]>


public countryList:Array<any>;
public loadedCountryList:Array<any>;
public countryRef:firebase.database.Reference;
  

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public donorsProvider: DonorsProvider,
    public db:AngularFireDatabase,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {




     
    this.showLoader();
     
    this.countryRef = firebase.database().ref('/Donors');

    this.countryRef.on('value', countryList => {
      let countries = [];
      countryList.forEach( country => {
        countries.push(country.val());
        return false;
      });
    
      this.countryList = countries;
      this.loadedCountryList = countries;
    });








    this.getUserInfoQRcode().then(
      newUser=> {
 
     
         this.loading.dismiss();
     
        } ,
        error =>{ 
    //      this.loading.dismiss();
       this.showAlert('Sorry !' , 'Please check email format and password more than 6 digits:( !')
    }).catch(e=>{
      this.loading.dismiss();
      this.showAlert('Sorry !' , 'Please check email format and password more than 6 digits:( !')
    })


      this.donorsList = this.donorsProvider.getChallengeList()
      .snapshotChanges()
      .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonorsPage');

    
  }



  initializeItems(): void {
    this.countryList = this.loadedCountryList;
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
  
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;
  
  
    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
  
    this.countryList = this.countryList.filter((v) => {
      if(v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  
    console.log(q, this.countryList.length);
  
  }




  

  goToDonor(){
 this.navCtrl.push(AddDonorPage)
  }






  getUserInfoQRcode(){
 
 
    return new Promise((resolve, reject) => {
   
     this.db.database.ref('addChallenge').once('value').then(function(snapshot){
       // return snapshot.val() || 'Anoynymous';
       let data = (snapshot.val()  ) || 'Anoynymous';
       //console.log(data)
       if (data === 'Anoynymous') {
        resolve('Anoynymous' );
       } else {
         resolve(data);
       }
        
  
       }, (err) => {
         reject('myerror: ' + err);
       });
  
  });
  
  
  }
  
  
  
  
  
  
  
  showLoader(){
   
    this.loading = this.loadingCtrl.create({
      content: " يعتمد على سرعة النترنت لديك لطفا انتظر قليلا",
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
