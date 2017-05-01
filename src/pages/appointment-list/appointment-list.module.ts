import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentListPage } from './appointment-list';
import { AppointmentTile } from './appointment-tile/appointment-tile';

@NgModule({
  declarations: [
    AppointmentListPage,
    AppointmentTile
  ],
  imports: [
    IonicPageModule.forChild(AppointmentListPage),
  ],
  exports: [
    AppointmentListPage
  ]
})
export class AppointmentListModule { }
