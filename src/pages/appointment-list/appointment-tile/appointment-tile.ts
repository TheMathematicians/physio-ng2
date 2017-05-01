import { Component, Input } from '@angular/core';
import { Appointment } from './../../../app/shared/models/appointment';

@Component({
    selector: 'appointment-tile',
    templateUrl: './appointment-tile.html'
})

export class AppointmentTile {
    @Input() appointment: Appointment;
}