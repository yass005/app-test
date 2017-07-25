import { Component, OnInit } from '@angular/core';
import {NavController,  NavParams} from 'ionic-angular';
import { Quote } from '../../data/quote';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

/**
 * Generated class for the LibraryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage  implements OnInit{

  quoteCollection : {category : string, quotes: Quote[], icon: string}[];
 pushPage: any;
  ngOnInit(){
    this.quoteCollection= quotes;
  }
  constructor(public navCtrl: NavController) {
     this.pushPage = QuotesPage;
  }

itemSelected(item :Quote){

  this.navCtrl.push(QuotesPage,{item})
}

}
