import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';

import { Appointment } from './../models/appointment';

@Injectable()
export class AppointmentService {
    private appointmentsPath: string = '/appointments';
    private _appointments: Observable<Appointment[]>;

    constructor(private db: AngularFireDatabase) {
    }

    get appointments() {
        if (!this._appointments) {
            this._appointments = this.getAppointments();
        }
        return this._appointments;
    }

    getAppointments() {
        return this.db.list(this.appointmentsPath)
            .map(appointments => appointments as Appointment[]);
    }
}