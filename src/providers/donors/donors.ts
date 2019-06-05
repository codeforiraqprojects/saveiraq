import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donors } from '../../models/donors';
import { AngularFireDatabase } from 'angularfire2/database';


/*
  Generated class for the DonorsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DonorsProvider {

  private challengeListRef = this.db.list<Donors>('Donors')

  constructor(public db:AngularFireDatabase) {
    console.log('Hello GiftServiceProvider Provider'); }

  getChallengeList(){
    return this.challengeListRef;
  }
  addChallenge(challenge:Donors){
    return this.challengeListRef.push(challenge)
  }
  updateChallenge(challenge:Donors){
    return this.challengeListRef.update(challenge.key,challenge)
  }
  removeChallenge(challenge ){
    return this.challengeListRef.remove(challenge )
  }

}