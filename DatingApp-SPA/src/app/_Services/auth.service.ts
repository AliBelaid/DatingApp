import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { post } from 'selenium-webdriver/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
UrlPath = 'http://localhost:5000/api/Auth/';
constructor(private http: HttpClient) { }


Login(model: any) {
return  this.http.post(this.UrlPath + 'Login', model)
.pipe(map((response: any ) => {
   const user = response;
  if (user)  {
   localStorage.setItem('token', user.token);
  }
}));
}
Register(model: any) {
return  this.http.post(this.UrlPath + 'Register', model);

}


}
