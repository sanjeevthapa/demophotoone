import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  private lat: any;
  private long: any;



  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;

      this.showAlert(resp.coords.latitude, resp.coords.longitude);
      // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });



  }


  showAlert(lat, long) {
    let alert = this.alertCtrl.create({
      title: 'Found Location',
      subTitle: 'Latitude' + lat + ' Longitutde' + long,
      buttons: ['OK']
    });
    alert.present();
  }



}
