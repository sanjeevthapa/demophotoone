import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = 'HomePage'
  locationRoot = 'LocationPage'


  constructor(public navCtrl: NavController) { }

}
