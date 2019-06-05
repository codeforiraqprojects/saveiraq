import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Weeklyquote } from '../../models/weeklyquote'
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the WeeklyquoteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeeklyquoteProvider {

  private challengeListRef = this.db.list<Weeklyquote>('addWeeklyQuote')

  constructor(public db:AngularFireDatabase) {
    console.log('Hello GiftServiceProvider Provider'); }

  getChallengeList(){
    return this.challengeListRef;
  }
  addChallenge(challenge:Weeklyquote){
    return this.challengeListRef.push(challenge)
  }
  updateChallenge(challenge:Weeklyquote){
    return this.challengeListRef.update(challenge.key,challenge)
  }
  removeChallenge(challenge ){
    return this.challengeListRef.remove(challenge )
  }

}