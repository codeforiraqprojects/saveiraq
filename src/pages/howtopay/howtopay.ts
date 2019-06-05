import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { HowtopayProvider } from '../../providers/howtopay/howtopay';
import { Howtopay } from '../../models/howtopay'

/**
 * Generated class for the HowtopayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-howtopay',
  templateUrl: 'howtopay.html',
})
export class HowtopayPage {

  howtopayList: Observable<Howtopay[]>

  constructor(public navCtrl: NavController, 
    public howtopayProvider: HowtopayProvider,
    public navParams: NavParams
  ) {

    this.howtopayList = this.howtopayProvider.getChallengeList()
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

}
