import { Component } from '@angular/core';
import {ViewController, NavController,  NavParams} from 'ionic-angular';

/**
 * Generated class for the QuotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text:string;
remove: boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewController :ViewController) {
  }


  Unfavorite(){

    this.remove=true;

  }

  ionViewDidLoad(){
    this.person=this.navParams.get('person')
    this.text=this.navParams.get('text')
  }
  onClose(){
    this.viewController.dismiss(this.remove);
  }
}
