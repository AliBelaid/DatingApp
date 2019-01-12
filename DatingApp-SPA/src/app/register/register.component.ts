import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_Services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   @Output() CancelFromRegister = new  EventEmitter();
model: any = {};
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
Cancel() {
     this.CancelFromRegister.emit(false);
      console.log('canceled');
    }

RegisterIn()   {
 this.auth.Register(this.model).subscribe(() => {
console.log("sccessed");
},  error => {
  console.log(error);

});
    }
}
