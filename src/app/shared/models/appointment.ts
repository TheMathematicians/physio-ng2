import { Gender } from "../enums/gender";
import { AppointmentStatus } from "../enums/appointment-status";

export interface Appointment {
    address: string;
    age: number;
    gender: Gender;
    location: string;
    mobile: string;
    patientName: string;
    pincode: string;
    problem: string;
    status?: AppointmentStatus;
}