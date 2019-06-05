import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';


import { StatisticsPage } from '../statistics/statistics';
import { DonorsPage } from '../donors/donors';

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { RequiredAmount } from '../../models/requiredAmount'
import { RequiredAmountProvider } from '../../providers/required-amount/required-amount';

import { BestDonorNameProvider } from '../../providers/best-donor-name/best-donor-name';
import { BestDonorName } from '../../models/bestDonorName'

import { WeeklyquoteProvider } from '../../providers/weeklyquote/weeklyquote';
import { Weeklyquote } from '../../models/weeklyquote'
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../../pages/login/login';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading: any;
  challengeList: Observable<RequiredAmount[]>
  bestDonorNameList: Observable<BestDonorName[]>
  weeklyquoteList: Observable<Weeklyquote[]>

  email = '';
  loggedin = false;
  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public authServiceProvider:AuthProvider , 
    private challengeListService: RequiredAmountProvider,
    private bestDonorNameProvider: BestDonorNameProvider,
    private weeklyquoteProvider: WeeklyquoteProvider,
    public db:AngularFireDatabase,
    public loadingCtrl: LoadingController) {


      let status 
      
 
      this.authServiceProvider.afAuth.authState.subscribe(
        user =>{
          if (user) {
            console.log( user.email )
            console.log( user.uid )
            localStorage.setItem("email", user.email);
            localStorage.setItem("uid", user.uid);
         status  = localStorage.getItem("login") ;
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
if (status == '') {
  this.loggedin = false
} else {
  this.loggedin = true
  this.email = localStorage.getItem("email" ) ;
}

 
      this.showLoader();
     
        


this.getUserInfoQRcode().then(
  newUser=> {
     this.loading.dismiss();
    } ,
    error =>{ 
      console.log('error: ' + error)
//      this.loading.dismiss();
   this.showAlert('Sorry !' , 'Please check email format and password more than 6 digits:( !')
}).catch(e=>{
  console.log(e  );
  this.loading.dismiss();
  this.showAlert('Sorry !' , 'Please check email format and password more than 6 digits:( !')
})
      
    
     

     
    this.challengeList = this.challengeListService.getChallengeList()
      .snapshotChanges()
      .map(
      changes => {
      
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
        
      });

    
 

 

      this.bestDonorNameList = this.bestDonorNameProvider.getChallengeList()
      .snapshotChanges()
      .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });

      this.weeklyquoteList = this.weeklyquoteProvider.getChallengeList()
      .snapshotChanges()
      .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
      

  }

 


  donors(){
    this.navCtrl.push(DonorsPage)
  }

statistics(){
  this.navCtrl.push(StatisticsPage)
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


logout(){
  this.authServiceProvider.signOut().then(()=>{

  })
 // this.navCtrl.setRoot(LoginPage)
  location.reload()
}



}