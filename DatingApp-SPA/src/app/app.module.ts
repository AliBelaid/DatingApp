import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ValuesComponent } from './values/values.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './Nav/Nav.component';
import {FormsModule} from '@angular/forms';
import { AuthService } from './_Services/auth.service';
import { HomeComponent } from './Home/Home.component';
import { RegisterComponent } from './register/register.component';
 @NgModule({
   declarations: [
      AppComponent,
      ValuesComponent,
      NavComponent,
     HomeComponent,
     RegisterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
