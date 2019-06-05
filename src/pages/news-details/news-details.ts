import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
 
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { NewsProvider } from '../../providers/news/news';
import { NEWS } from '../../models/news'
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';


import {Nl2BrPipeModule} from 'nl2br-pipe';



/**
 * Generated class for the NewsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetailsPage {

  id: string;

  newsList = {
    discription: "", 
    latitude: "", 
    longitude: "", 
    title: ""
  }

  loading: any;
  todo: AngularFireList<any>;
  UnData = [];
 


  constructor(public navCtrl: NavController, 
    public newsProvider: NewsProvider,
    public navParams: NavParams
    , private db: AngularFireDatabase,
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







    this.id = navParams.get('id');
   
    this.db.list("news/"+this.id).valueChanges().subscribe(_data => {
      this.UnData = _data;
      console.log(this.UnData);
    });


  }


 



  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailsPage');
 
 
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
