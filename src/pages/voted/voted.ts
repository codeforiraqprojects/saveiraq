import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatisticsPage } from '../../pages/statistics/statistics'

/**
 * Generated class for the VotedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-voted',
  templateUrl: 'voted.html',
})
export class VotedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  back(){
this.navCtrl.setRoot(StatisticsPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VotedPage');
  }

}
