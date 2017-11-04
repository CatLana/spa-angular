import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormDataService } from './form-data.service';

@NgModule({
  imports: [BrowserModule, HttpModule],
  providers: [FormDataService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
