import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm= this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
  email:['',[Validators.required,Validators.pattern('[A-Za-z0-9]*')]],
  pwd:['',[Validators.required,Validators.pattern('[0-9A-Za-z]*')]]
})


  constructor( private router: Router, private ds: DataService ,private fb : FormBuilder ) { }

  ngOnInit(): void {
  }

login(){
 var uname = this.loginForm.value.uname

 var email = this.loginForm.value.email

 var pwd = this.loginForm.value.pwd
console.log(uname);


let userDetails = this.ds.user

if (uname in userDetails){
  if(pwd == userDetails[uname]["password"]){
    alert("login successful")

  }
else{
  alert("invalid password")
}
}
else{
  alert("invalid user")
}

}

}
