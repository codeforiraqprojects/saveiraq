import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Statistics } from '../../models/statistics';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the StatisticsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StatisticsProvider {

  private challengeListRef = this.db.list<Statistics>('statistics')

  constructor(public db:AngularFireDatabase) {
    console.log('Hello GiftServiceProvider Provider'); }

  getChallengeList(){
    return this.challengeListRef;
  }
  addChallenge(challenge:Statistics){
    return this.challengeListRef.push(challenge)
  }
  updateChallenge(challenge:Statistics){
    return this.challengeListRef.update(challenge.key,challenge)
  }
  removeChallenge(challenge ){
    return this.challengeListRef.remove(challenge )
  }

}