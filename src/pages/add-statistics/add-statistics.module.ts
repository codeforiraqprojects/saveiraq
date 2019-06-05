import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddStatisticsPage } from './add-statistics';

@NgModule({
  declarations: [
    AddStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddStatisticsPage),
  ],
})
export class AddStatisticsPageModule {}
