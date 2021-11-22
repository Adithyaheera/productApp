import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
signupForm = this.fb.group({
uname:['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
email:['',[Validators.required,Validators.pattern('[A-Za-z0-9]*')]],
pwd:['',[Validators.required,Validators.pattern('[A-Za-z0-9]*')]],
ph:['',[Validators.required,Validators.pattern('[0-9]*')]],


})



// uname=""
// email=""
// pwd=""
// ph=""
// productName=""
// price=""
// Discription=""
// image=""
  constructor( private router : Router, private ds:DataService,private fb: FormBuilder) { }

  ngOnInit(): void {
  }

register(){
var uname = this. signupForm .value.uname

var email = this.signupForm. value.email

var pwd = this.signupForm. value.pwd

var ph = this.signupForm. value.ph

var productName = this .signupForm. value.productName

 var price = this.signupForm. value.price

 var Discription = this.signupForm. value.Discription



var result = this.ds.register(uname,email,pwd,ph,productName,price,Discription)
.subscribe(result=>{
  if (result){
    alert("successfully register")
    this.router.navigateByUrl(" ")
  }
  
  else{
    alert("user already exist...... please login")
  }
})



}

}
