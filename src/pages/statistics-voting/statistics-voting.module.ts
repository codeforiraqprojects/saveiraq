import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatisticsVotingPage } from './statistics-voting';

@NgModule({
  declarations: [
    StatisticsVotingPage,
  ],
  imports: [
    IonicPageModule.forChild(StatisticsVotingPage),
  ],
})
export class StatisticsVotingPageModule {}
