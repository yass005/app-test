import { LibraryPage } from './../library/library';
import {FavoritesPage} from '../favorites/favorites';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LibraryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({

selector: 'Tabs-page',
 template: `
    <ion-tabs>
      <ion-tab tabIcon="star" [root]="favoritesPage"></ion-tab>
      <ion-tab tabIcon="book" [root]="libraryPage"></ion-tab>

    </ion-tabs>`
})
export class TabsPage {
  favoritesPage=FavoritesPage;
  libraryPage=LibraryPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

}
