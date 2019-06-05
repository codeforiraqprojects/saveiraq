import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { DonorPage } from '../donor/donor';
import { DonorsPage } from '../donors/donors';
import { HowtopayPage } from '../howtopay/howtopay';
import { NewsPage } from '../news/news';
import { StatisticsPage } from '../statistics/statistics';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HowtopayPage;
  tab3Root = NewsPage;
  tab4Root = AboutPage;
  
 

  constructor() {

  }
}
