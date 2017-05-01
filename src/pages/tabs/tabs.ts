import { AppointmentForm } from '../appointment-form/appointment-form';
import { Component } from '@angular/core';

import { LandingPage } from '../landing/landing';
import { AppointmentListPage } from './../appointment-list/appointment-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AppointmentListPage;
  tab2Root = LandingPage;
  tab3Root = AppointmentForm;

  constructor() { }
}
