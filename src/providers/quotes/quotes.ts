import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Quote } from './../../data/quote';
/*
  Generated class for the QuotesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class QuotesProvider {
private favoriteQuotes : Quote[]=[];

  constructor(public http: Http) {
    console.log('Hello QuotesProvider Provider');
  }

  AddfavoriteQuotes(quote: Quote){
    this.favoriteQuotes.push(quote);
  }

  removefavoriteQuotes(quote: Quote){
 const position = this.favoriteQuotes.indexOf(quote);
         this.favoriteQuotes.splice(position,1);

  }

  getfavoriteQuotes(){

    return this.favoriteQuotes.slice();
  }

}