import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-appointment-form',
  templateUrl: 'appointment-form.html'
})
export class AppointmentForm {

  public genderType: any;
  public locations: any;
  public pin: any;
  public alphaRgx: RegExp = /^(\D)+$/; // /^[a-zA-Z\s]*$/;
  public numberRex: RegExp = /^(\d)+$/;
  appointmentForm: FormGroup;

  constructor(public navCtrl: NavController, public _fb: FormBuilder) {
    this.appointmentForm = this._fb.group({
      mobile: ['9908764343', Validators.compose([Validators.required,Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.numberRex)])],
      name: [null, Validators.compose([Validators.required, Validators.pattern(this.alphaRgx)])],
      gender: [null, Validators.required],
      age: [null, Validators.required],
      pin: ['534302', Validators.compose([Validators.required,Validators.minLength(6), Validators.maxLength(6), Validators.pattern(this.numberRex)])],
      location: [null, Validators.required],
      address: [null, Validators.required],
      problem: [null, Validators.required]
    });
  }
  ngOnInit() { }

  //Fires once when the view is initially loaded into the DOM
  ionViewDidLoad() {
    this.getGender();
    this.pin = this.appointmentForm.value.pin;
    this.getLocation(this.pin);
  }

  //Hooks that are available before and after the page in question becomes active
  //Fires every time a page becomes the active view
  ionViewWillEnter() { }
  ionViewDidEnter() { }

  //Hooks that are available before and after the page leaves the viewport
  ionViewWillLeave() { }
  ionViewDidLeave() { }

  //Available before the page is removed from the DOM
  ionViewWillUnload() { }

  //call gender service
  getGender() {
    return this.genderType = [{
      CODE: 'M',
      DESC: 'Male'
    }, {
      CODE: 'F',
      DESC: 'Female'
    }, {
      CODE: 'T',
      DESC: 'Transgender'
    }];
    // return this.service.getGender().then(data => this.genderType = data);
  }
  getLocation(pin?: any) {
    return this.locations = [{
      CODE: 'nidadavole',
      DESC: 'Nidadalole'
    }, {
      CODE: 'purushothapalli',
      DESC: 'Purushothapalli'
    }, {
      CODE: 'rajahmundry',
      DESC: 'Rajahmundry'
    }];
    // return this.service.getLocation(pin).then(data => this.locations = data);
  }
  onContinue() {
    console.log('on continue .. !!')
  }
}
