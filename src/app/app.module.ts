import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormDataService } from './form-data.service';
import {DndModule} from 'ng2-dnd';


@NgModule({
  imports: [BrowserModule, HttpModule,  DndModule.forRoot()],
  providers: [FormDataService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
