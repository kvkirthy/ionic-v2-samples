import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';

/*
  Generated class for the OAuthWindow component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'o-auth-window',
  templateUrl: 'build/components/o-auth-window/o-auth-window.html'
})
export class OAuthWindow {


  constructor(private viewCtrl: ViewController) {
  }

  closeModel(){
    this.viewCtrl.dismiss();
  }
}
