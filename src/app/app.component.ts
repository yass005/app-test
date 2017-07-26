import { Component, ViewChild } from '@angular/core';
import {MenuController, NavController,  Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage=TabsPage;
  settingspage=SettingsPage;

  @ViewChild('nav') nav: NavController

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onload(page : any){
this.nav.setRoot(page);
  }


 toggleMenu() {
   this.menuCtrl.toggle();
    this.menuCtrl.close();
 }
}

