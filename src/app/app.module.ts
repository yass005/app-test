import { QuotesPage } from './../pages/quotes/quotes';
import { SettingsPage } from './../pages/settings/settings';
import {FavoritesPage} from '../pages/favorites/favorites';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { LibraryPage } from '../pages/library/library';
import { QuotePage } from '../pages/quote/quote';
import { TabsPage } from '../pages/tabs/tabs';
import { QuotesProvider } from '../providers/quotes/quotes';
import { SettingsProvider } from '../providers/settings/settings';


@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage,
    TabsPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   FavoritesPage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    TabsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesProvider,
    SettingsProvider
  ]
})
export class AppModule {}
