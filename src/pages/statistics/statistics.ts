import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';


import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { StatisticsProvider } from '../../providers/statistics/statistics';
import { Statistics } from '../../models/statistics';
import { AngularFireDatabase } from 'angularfire2/database';
import { AddStatisticsPage } from '../add-statistics/add-statistics';
import { StatisticsVotingPage } from '../statistics-voting/statistics-voting';


/**
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {

  newsList: Observable<Statistics[]>
  loading: any;
  constructor(public navCtrl: NavController, 
    public statisticsProvider: StatisticsProvider,
    public navParams: NavParams,
    public db:AngularFireDatabase,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {




     
    this.showLoader();
     
        


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



    this.newsList = this.statisticsProvider.getChallengeList()
    .snapshotChanges()
    .map(
    changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });

    
 
  }


  goToAddStatistics(){
    this.navCtrl.push(AddStatisticsPage)
  }


  goToVotingStatistics(title , key, like , dislike){
    this.navCtrl.push(StatisticsVotingPage,{
      title:title,
      key:key,
      like:like,
      dislike:dislike,
    })
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