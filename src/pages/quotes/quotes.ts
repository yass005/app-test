import { Quote } from './../../data/quote';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

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
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
