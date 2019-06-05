import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { NewsProvider } from '../../providers/news/news';
import { NEWS } from '../../models/news'
import { NewsDetailsPage } from '../news-details/news-details';
import { AngularFireDatabase } from 'angularfire2/database';
import { AddNewsPage } from '../add-news/add-news';


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  newsList: Observable<NEWS[]>
  loading: any;
  constructor(public navCtrl: NavController, 
    public newsProvider: NewsProvider,
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




    this.newsList = this.newsProvider.getChallengeList()
    .snapshotChanges()
    .map(
    changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HowtopayPage');
  }


  goToAddNEWS(){
    this.navCtrl.push(AddNewsPage)
  }

  goToDetails(id){
    this.navCtrl.push(NewsDetailsPage,{
      id:id
    })
console.log(id);
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
