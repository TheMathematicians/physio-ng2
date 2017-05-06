import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastService } from './../../app/shared/services/toaster.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
}
