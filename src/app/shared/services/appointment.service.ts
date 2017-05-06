/**
 * Ref: https://github.com/angular/angularfire2/blob/master/docs/3-retrieving-data-as-lists.md
 */

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
        return this.getAppointmentsRef(true)
            .map(appointments => appointments.map(a => Object.assign({
                key: a.key
            }, a.val())) as Appointment[]);
    }

    create(appointment: Appointment) {
        return this.getAppointmentsRef().push(appointment);
    }

    private getAppointmentsRef(preserveSnapshot: boolean = false) {
        return this.db.list(this.appointmentsPath, { preserveSnapshot });
    }
}