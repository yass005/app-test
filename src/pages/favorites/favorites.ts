import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { QuotesProvider } from '../../providers/quotes/quotes';
import { Quote } from './../../data/quote';
import { QuotePage } from '../quote/quote';


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
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public Quotes : QuotesProvider) {


  }

  ionViewWillEnter(){

      this.quotes=this.Quotes.getfavoriteQuotes();
  }

  removefromFavoris(item : Quote){
 this.Quotes.removefavoriteQuotes(item)
  this.quotes=this.Quotes.getfavoriteQuotes();
  }

  onViewQuote(quote: Quote){

    let modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove : boolean) => {
      if (remove ) {
        this.Quotes.removefavoriteQuotes(quote);
        this.quotes=this.Quotes.getfavoriteQuotes();
      }
    });
  }

}
