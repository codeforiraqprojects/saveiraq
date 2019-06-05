import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VotedPage } from './voted';

@NgModule({
  declarations: [
    VotedPage,
  ],
  imports: [
    IonicPageModule.forChild(VotedPage),
  ],
})
export class VotedPageModule {}
