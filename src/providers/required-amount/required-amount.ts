import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RequiredAmount } from '../../models/requiredAmount'
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the RequiredAmountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequiredAmountProvider {

  private challengeListRef = this.db.list<RequiredAmount>('addChallenge')

  constructor(public db:AngularFireDatabase) {
    console.log('Hello GiftServiceProvider Provider'); }

  getChallengeList(){
    return this.challengeListRef;
    
  }



  getRequiredAmount(){
 
 
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





  addChallenge(challenge:RequiredAmount){
    return this.challengeListRef.push(challenge)
  }
  updateChallenge(challenge:RequiredAmount){
    return this.challengeListRef.update(challenge.key,challenge)
  }
  removeChallenge(challenge ){
    return this.challengeListRef.remove(challenge )
  }

}