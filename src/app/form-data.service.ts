import { Injectable } from '@angular/core';
import { FormData } from './form-data';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FormDataService {


    private formDataUrl = 'http://www.mocky.io/v2/59f7760a2f0000ab1d55864e';

    constructor(private http: Http) { }

    // return a promise with an object of type FormData
    // the promise is necessary to get data asynchronously
    getFormData(): Promise<FormData> {
        return this.http.get(this.formDataUrl)
            .toPromise()
            .then(response => response.json() as FormData)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
