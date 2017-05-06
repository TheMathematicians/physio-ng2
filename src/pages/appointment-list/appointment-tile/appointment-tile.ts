import { Component, Input } from '@angular/core';
import { Appointment } from './../../../app/shared/models/appointment';

@Component({
    selector: 'appointment-tile',
    templateUrl: './appointment-tile.html'
})

export class AppointmentTile {
    private iconMap = {
        male: 'man',
        female: 'woman'
    };
    @Input() appointment: Appointment;
    isDetailVisible: boolean = false;
}