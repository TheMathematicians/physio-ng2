import { AppointmentForm } from '../appointment-form/appointment-form';
import { Component } from '@angular/core';

import { LandingPage } from '../landing/landing';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LandingPage;
  tab3Root = AppointmentForm;

  constructor() {}
}
