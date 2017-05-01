import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { Appointment } from './../models/appointment';
import { BaseService } from './base.service';
import { Gender } from "../enums/gender";

let tempAppointments: Appointment[] = [{
    address: 'local',
    age: 25,
    gender: Gender['Male'],
    location: 'DSNR',
    mobile: '1234567890',
    patientName: 'Patient 1',
    pincode: '125125',
    problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aenean lorem purus, blandit ac scelerisque ac, volutpat non lorem. 
        Suspendisse nec vulputate ex, quis gravida est. Fusce vehicula ultricies lacus, 
        id vehicula odio gravida eu. Maecenas dapibus est quis sem scelerisque, eget 
        pretium massa tempus. Quisque bibendum luctus mi, eu vehicula tortor posuere 
        condimentum. Pellentesque bibendum tellus nisi, sed viverra tellus pulvinar in. 
        Proin tempus quam sit amet molestie ultrices. Vestibulum et metus dignissim, 
        ullamcorper lorem eu, porta magna. Ut felis nunc, venenatis non aliquam sit 
        amet, vestibulum in est. Phasellus interdum massa id vestibulum dapibus. 
        Quisque placerat varius ligula ut tincidunt. Etiam lobortis blandit velit 
        at facilisis. Vestibulum sed varius justo. Aliquam in pulvinar sapien, 
        quis vestibulum quam. Aenean at.`
}, {
    address: 'address',
    age: 21,
    gender: Gender['Female'],
    location: 'DSNR',
    mobile: '1234567890',
    patientName: 'Patient 2',
    pincode: '125125',
    problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aenean lorem purus, blandit ac scelerisque ac, volutpat non lorem. 
        Suspendisse nec vulputate ex, quis gravida est.`
}];

@Injectable()
export class AppointmentService extends BaseService {
    private _appointments: BehaviorSubject<Appointment[]>;
    private dataStore: {
        appointments: Appointment[]
    };

    constructor(protected http: Http) {
        super(http);
        this.dataStore = { appointments: [] };
        this._appointments = new BehaviorSubject<Appointment[]>([]);
    }

    get appointments() {
        if (!this._appointments.getValue().length) {
            this.loadAppointments();
        }
        return this._appointments.asObservable();
    }

    loadAppointments() {
        // TODO Make api call to get the data
        this.dataStore.appointments = tempAppointments;
        this._appointments.next(Object.assign({}, this.dataStore).appointments);
    }
}