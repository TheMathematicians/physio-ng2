import { Injectable } from '@angular/core';
import { LoadingController } from "ionic-angular";

@Injectable()
export class LoaderService {

    private loader: any;
    private _isVisible: boolean;
    get isVisible() {
        return this._isVisible;
    }

    constructor(public loadingCtrl: LoadingController) { }

    private getLoader(content?: string) {
        let loader = this.loadingCtrl.create({
            content: content || ''
        });
        return loader;
    }

    show(content?: string) {
        if (!this._isVisible) {
            this.loader = this.getLoader(content)
            this.loader.present();
            this._isVisible = true;
        }
    }

    hide() {
        if (this._isVisible) {
            this.loader.dismiss();
            this._isVisible = false;
        }
    }
}
