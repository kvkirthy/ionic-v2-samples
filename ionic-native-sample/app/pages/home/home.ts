import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Camera} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  image: any;
  message: string;
  constructor(private navCtrl: NavController) {

  }

  launchCamera(){
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
      }).then(
        (result) => this.image = "data:image/jpeg;base64," + result,
        (error) => this.message = error
        );
  }
}
