import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  LoadingController, AlertController } from 'ionic-angular';
import { AngularFireDatabase ,  AngularFireList } from 'angularfire2/database';
import firebase from 'firebase'
import { VotedPage } from '../voted/voted'
import { StatisticsPage } from '../../pages/statistics/statistics'
import { LoginPage } from '../login/login';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Generated class for the StatisticsVotingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statistics-voting',
  templateUrl: 'statistics-voting.html',
})
export class StatisticsVotingPage {

  data = {
    title : '',
    key : '',
    email : '',
    uid : '' ,
    like:  '',
    dislike: '' 
  }

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  listItems = [];
  loading: any;
  constructor( public db: AngularFireDatabase ,
    public alertCtrl: AlertController,
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController,
    public navParams: NavParams) {


      let loginStatus = localStorage.getItem("login");
      if (loginStatus !== 'true') {
        this.navCtrl.setRoot(LoginPage);
      } 

      

      this.showLoader();
    
      this.data.title = navParams.get("title");
      this.data.key = navParams.get("key");
      this.data.like = navParams.get("like");
      this.data.dislike = navParams.get("dislike");

      let user = firebase.auth().currentUser;
    
      
      if (user != null) {
        // this.data.email = user.email;
        // this.data.uid = user.uid; 
        this.data.email = localStorage.getItem("email" );
        this.data.uid = localStorage.getItem("uid" );
      }



      this.itemsRef = db.list('answers/' + this.data.key);
      this.itemsRef.snapshotChanges(['child_added'])
        .subscribe(actions => {
          actions.forEach(action => {
         //   console.log(action.type);
          //  console.log(action.key);
            if (action.key == 'email') {
              console.log(  action.payload.val()  );
              if ( action.payload.val() == this.data.email) {
               
                this.navCtrl.push(VotedPage)
              }
            }  
     
          });
        });

 
        this.loading.dismiss();
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
 

  ionViewDidLoad() {
  
 
  }



  back(){
    this.navCtrl.setRoot(StatisticsPage)
      }



  like(){
console.log("like")
firebase.database().ref('answers/' + this.data.key).set({
  title:this.data.title,
  email:this.data.email,
  like: '1',
  dislike: '0',
  statisticsKey: this.data.key,
  userId:this.data.uid
});

//update 
firebase.database().ref('statistics/' + this.data.key).update({
  like: (parseInt(this.data.like)  + 1).toString(),
  dislike: (parseInt(this.data.dislike)  - 1).toString(),
});

  }

  dislike(){
    console.log("dislike")
    firebase.database().ref('answers/' + this.data.key).set({
      title:this.data.title,
      email:this.data.email,
      like: '0',
      dislike: '1',
      statisticsKey: this.data.key,
      userId:this.data.uid
    });
    
    //update 
    firebase.database().ref('statistics/' + this.data.key).update({
      like: (parseInt(this.data.like)  - 1).toString(),
      dislike: (parseInt(this.data.dislike)  + 1).toString(),
    });



  }



}
