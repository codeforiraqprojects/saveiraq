import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Howtopay } from '../../models/howtopay'
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the HowtopayProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HowtopayProvider {

  private challengeListRef = this.db.list<Howtopay>('howtopay')

  constructor(public db:AngularFireDatabase) {
    console.log('Hello GiftServiceProvider Provider'); }

  getChallengeList(){
    return this.challengeListRef;
  }
  addChallenge(challenge:Howtopay){
    return this.challengeListRef.push(challenge)
  }
  updateChallenge(challenge:Howtopay){
    return this.challengeListRef.update(challenge.key,challenge)
  }
  removeChallenge(challenge ){
    return this.challengeListRef.remove(challenge )
  }

}