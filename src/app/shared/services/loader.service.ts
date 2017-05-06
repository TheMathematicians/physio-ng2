import { Injectable } from '@angular/core';
import { LoadingController } from "ionic-angular";

@Injectable()
export class LoaderService {

    public loader:any;

    constructor(public loadingCtrl: LoadingController) { }
    getLoader(content?: string){
        let loader = this.loadingCtrl.create({
            content: content || "Please wait..."
        });
        return loader;
    }

    show(content?: string) {  
       this.loader = this.getLoader(content)      
        return this.loader.present();
    }

    hide() {
        setTimeout(() => {
            this.loader.dismiss();
        }, 200);
    }
}
