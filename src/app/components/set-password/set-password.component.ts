import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {
  
  showPassword:boolean = false;
  pwdError:boolean = false;
  pwdSuccess:boolean = false;

  constructor() { }

  ngOnInit() {

  }

  togglePassword(evt){
    // alert("hello")
    var inputField = document.getElementById("password");
    console.log(inputField)
    if(this.showPassword == true) {
      inputField.setAttribute('type', 'password');
      this.showPassword = false;
    } else {
      inputField.setAttribute('type', 'text');
      this.showPassword = true;
    }

  }

}
