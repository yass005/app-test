import { Injectable } from '@angular/core';
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

  constructor() {
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

  isfavorite(quote: Quote): boolean{
  const position = this.favoriteQuotes.indexOf(quote);

  if (position>=0){
return true
  }
return  false
  }
}
