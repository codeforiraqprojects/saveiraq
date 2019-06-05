import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BestDonorName } from '../../models/bestDonorName'
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the BestDonorNameProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BestDonorNameProvider {

  private challengeListRef = this.db.list<BestDonorName>('addBestDonorName')

  constructor(public db:AngularFireDatabase) {
    console.log('Hello GiftServiceProvider Provider'); }

  getChallengeList(){
    return this.challengeListRef;
  }
  addChallenge(challenge:BestDonorName){
    return this.challengeListRef.push(challenge)
  }
  updateChallenge(challenge:BestDonorName){
    return this.challengeListRef.update(challenge.key,challenge)
  }
  removeChallenge(challenge ){
    return this.challengeListRef.remove(challenge )
  }

}