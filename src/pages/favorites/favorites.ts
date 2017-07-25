import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuotesProvider } from '../../providers/quotes/quotes';
import { Quote } from './../../data/quote';

/**
 * Generated class for the FavoritesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
 quotes: Quote[]
  constructor(public navCtrl: NavController, public navParams: NavParams, public Quotes : QuotesProvider) {


  }

  ionViewWillEnter(){

      this.quotes=this.Quotes.getfavoriteQuotes();
  }

}
