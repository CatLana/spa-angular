import { Component } from '@angular/core';
import { FormData } from './form-data';
import { FormDataService } from './form-data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './partials/app.html',
  providers: [FormDataService]
})

export class AppComponent implements OnInit {
  // Initialise the Form Data object
  formData: FormData;

  constructor(private formDataService: FormDataService) { }

  // This method retrieves data from the server by mean of form-data.service. 
  // Form data service returns a promise with a form data object
  getFormData(): void {
    this.formDataService.getFormData().then(dataRetrieved => {
      this.formData = dataRetrieved;
    });
  }

  // When the application starts we would like to execute the following
  ngOnInit(): void {
    this.getFormData();
  }
}
