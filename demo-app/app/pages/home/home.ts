import {Component} from '@angular/core';
import {NavController, Modal} from 'ionic-angular';
import {OAuthWindow} from '../../components/o-auth-window/o-auth-window';
import {SessionListPage} from '../session-list/session-list';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {

  }

  showOAuthWindow(){
    this.navCtrl.present(Modal.create(OAuthWindow));
  }

  goToFirstPage(){
    this.navCtrl.push(SessionListPage);
  }
}
