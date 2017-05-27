import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

import { Appointment } from './../../app/shared/models/appointment';

import { AppointmentService, LoaderService } from './../../app/shared/services';

/**
 * Generated class for the AppointmentList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-appointment-list',
  templateUrl: 'appointment-list.html',
})
export class AppointmentListPage {

  appointments: Observable<Appointment[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private appointmentService: AppointmentService,
    private loader: LoaderService
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentList');
    this.appointments = this.appointmentService.appointments
      .do(
      appointments => this.loader.hide(),
      error => this.loader.hide()
      );

    this.loader.show();
  }
}
