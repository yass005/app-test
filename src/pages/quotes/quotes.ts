import { Quote } from './../../data/quote';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';
import { QuotesProvider } from '../../providers/quotes/quotes';

/**
 * Generated class for the QuotesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {

  quotes: {category : string, quotes: Quote[], icon: string}[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
  public Quotes : QuotesProvider) {

 this.quotes=this.navParams.data;
  }

  ionViewDidLoad() {

  }
addToFavoris(item : Quote){
 let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            this.Quotes.removefavoriteQuotes(item)
            console.log(this.Quotes.getfavoriteQuotes())
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.Quotes.AddfavoriteQuotes(item)
            console.log(this.Quotes.getfavoriteQuotes())
          }
        }
      ]
    });
    confirm.present();
  }
}
