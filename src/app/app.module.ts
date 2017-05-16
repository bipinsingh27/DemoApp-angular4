import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}  from '@angular/forms';
import { HttpModule}  from '@angular/http';


import { AppComponent }  from './app.component';
import { userComponent }  from '../app/components/user.component';
import { courseComponent }  from '../app/courses/course.component';
import { addUserComponent }  from '../app/addUser/addUser.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule, HttpModule ],
  declarations: [ AppComponent, userComponent,courseComponent,addUserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
	