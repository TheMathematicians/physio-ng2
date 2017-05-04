import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {

  landingForm: FormGroup;
  public numberRex: RegExp = /^(\d)+$/;

  constructor(public navCtrl: NavController,
    public _fb: FormBuilder) {
    this.landingForm = this._fb.group({
      mobile: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.numberRex)])]
    });
  }
  ngOnInit() { }

  onSubmit($event?:any) {
    debugger;
  }
}
