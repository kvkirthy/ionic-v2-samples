import { Component } from '@angular/core';
import { NavController, ActionSheet, Alert } from 'ionic-angular';

/*
  Generated class for the SessionListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/session-list/session-list.html',
})
export class SessionListPage {

  meetupList: Array<any>;

  constructor(private nav: NavController) {

    this.meetupList = [
      {
        title: 'ReactJS Workshop',
        month: 'January'
      },
      {
        title: 'Angular 2',
        month: 'June'
      },
      {
        title: 'Reactive Extensions',
        month: 'March'
      },
      {
        title: 'Ionic Framework',
        month: 'July'
      }
    ];

  }

  goBack() {
    this.nav.pop();
  }

  showOptions() {
    let actionSheet = ActionSheet.create({
      title: "Options",
      buttons: [{
        text: "Share",
        handler: () => {
          let alert = Alert.create({
            message: "It is a good idea to share!",
            title: "Share",
            buttons: [{
              text: "Ok",
              handler: () => { }
            }],
            enableBackdropDismiss: true
          });
          this.nav.present(alert);
        }
      }, {
          text: "Cancel",
          role: "cancel",
          handler: () => { }
        }, {
          text: "Delete Session",
          role: "destructive",
          handler: () => {
            let alert = Alert.create({
              message: "Your session is deleted.",
              title: "Delete Session ",
              buttons: [{
                text: "Ok",
                handler: () => { }
              }],
              enableBackdropDismiss: true
            });
            this.nav.present(alert);
          }
        }]
    });
    this.nav.present(actionSheet);
  }
}