import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { DonorPage } from '../pages/donor/donor';
import { DonorsPage } from '../pages/donors/donors';
import { HowtopayPage } from '../pages/howtopay/howtopay';
import { NewsPage } from '../pages/news/news';
import { StatisticsPage } from '../pages/statistics/statistics';
import { NewsDetailsPage } from '../pages/news-details/news-details';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { DatabaseInfoProvider } from '../providers/database-info/database-info';

import { VotedPage } from '../pages/voted/voted'

import { StatisticsVotingPage } from '../pages/statistics-voting/statistics-voting';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AddStatisticsPage } from '../pages/add-statistics/add-statistics';
import { AddNewsPage } from '../pages/add-news/add-news';
import { AddDonorPage } from '../pages/add-donor/add-donor';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RequiredAmountProvider } from '../providers/required-amount/required-amount';
import { BestDonorNameProvider } from '../providers/best-donor-name/best-donor-name';
import { WeeklyquoteProvider } from '../providers/weeklyquote/weeklyquote';
import { HowtopayProvider } from '../providers/howtopay/howtopay';
import { NewsProvider } from '../providers/news/news';
import {Nl2BrPipeModule} from 'nl2br-pipe';
import { StatisticsProvider } from '../providers/statistics/statistics';
import { DonorsProvider } from '../providers/donors/donors';
import { AngularFireAuth } from 'angularfire2/auth';

 
// AF2 Settings
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DonorPage,
    DonorsPage,
    HowtopayPage,
    NewsPage,
    StatisticsPage,
    NewsDetailsPage,
    LoginPage,
    RegisterPage,
    AddStatisticsPage ,
    AddNewsPage ,
    AddDonorPage,
    StatisticsVotingPage,
    VotedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    Nl2BrPipeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DonorPage,
    DonorsPage,
    HowtopayPage,
    NewsPage,
    StatisticsPage,
    NewsDetailsPage,
    LoginPage,
    RegisterPage,
    AddStatisticsPage ,
    AddNewsPage ,
    AddDonorPage,
    StatisticsVotingPage,
    VotedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    DatabaseInfoProvider,
    RequiredAmountProvider,
    BestDonorNameProvider,
    WeeklyquoteProvider,
    HowtopayProvider,
    NewsProvider,
    StatisticsProvider,
    DonorsProvider,
    AngularFireAuth,
  ]
})
export class AppModule {}
