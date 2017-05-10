import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}  from '@angular/forms';
import { HttpModule}  from '@angular/http';


import { AppComponent }  from './app.component';
import { userComponent }  from '../app/components/user.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule, HttpModule ],
  declarations: [ AppComponent, userComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
	