import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';



@IonicPage()
@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html',
})
export class PhotosPage {


  public photos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ServiceProvider) {
  }

  ionViewDidLoad() {
    this.loadPhotos();
    console.log('ionViewDidLoad PhotosPage');
  }


  loadPhotos() {
    this.service.getPhotos().subscribe(
      response => {
        this.photos = response.slice(1, 10);
        console.log(this.photos);
      },
      error => {
        alert('something wrong happened');
      })
  }


}
