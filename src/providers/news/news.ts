import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NEWS } from '../../models/news'
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  private challengeListRef = this.db.list<NEWS>('news')

  constructor(public db:AngularFireDatabase) {
    console.log('Hello NewsProvider'); }

  getChallengeList(){
    return this.challengeListRef;
  }

  getChallengeListById(id){
    return this.db.list<NEWS>(`news/${id}`) ;
  }



  addChallenge(news:NEWS){
    return this.challengeListRef.push(news)
  }
  updateChallenge(news:NEWS){
    return this.challengeListRef.update(news.key,news)
  }
  removeChallenge(news ){
    return this.challengeListRef.remove(news )
  }

}