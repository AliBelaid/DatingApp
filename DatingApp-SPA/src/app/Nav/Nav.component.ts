import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_Services/auth.service';
import { error } from '@angular/compiler/src/util';
import { tokenKey } from '@angular/core/src/view';

@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {
model : any= {};

  constructor(private   auth: AuthService) { }

  ngOnInit() {
  }
Login() {
this.auth.Login(this.model).subscribe(next => {
 console.log('Scussed');
}, error => {
  console.log('Error');
});
  console.log(this.model);

}

LoggedIn(){
const token = localStorage.getItem('token');
return !!token;

}

LogOut(){
   localStorage.removeItem('token');
   console.log(" Logged Out");

  }
}
