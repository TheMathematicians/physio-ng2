import { Http } from '@angular/http';

export class BaseService {
    private baseUrl: string;

    constructor(protected http: Http) {
        this.baseUrl = '';
    }
}