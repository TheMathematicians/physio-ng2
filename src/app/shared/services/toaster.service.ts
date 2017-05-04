import { Injectable } from "@angular/core";
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {

    constructor(public toastCtrl: ToastController) { }

    //to show toast
    presentToast(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });
        toast.present();
    }
}