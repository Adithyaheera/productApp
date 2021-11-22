import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  currentUser=" "
  currentPassword=" "


user:any={
Ram:{uname:"Ram",email:"ram123@gmail.com", ph: 123456, password:"userone",productName:"woodland shoe",price:2000,Discription: "very good shoe product" },
Ravi:{uname:"Ravi",email:"ravi456@gmail.com",ph:456789, password:"usertwo",productName:"Tshirt",price:1500,Discription: "very good shoe product" },
Varun:{uname:"Ram",email:"varun789@gmail.com",Ph:45587 ,password:"userthree",productName:"sun glass",price:1000,Discription: "very good shoe product" }

}





  constructor(private  http:HttpClient) {
    this.getDetails()
   }

saveDetails(){
  if(this.user){
    localStorage.setItem("user",JSON.stringify(this.user))
  }
  if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }
}

getDetails(){
  if(localStorage.getItem("user")){
    this.user =JSON.parse(localStorage.getItem("currentUser")||' '  )
  }
  if(localStorage.getItem("user")){
    this.user =JSON.parse(localStorage.getItem("currentUser")||' '  )
  }
}





register(uname:any,email:any,ph:any,password:any,productName:any,price:any,Discription:any){



  const data ={
    uname,
    email,
    ph,
    password,
    productName,
    price,
    Discription,
    
  }
  return this.http.post("http://localhost:3000/register",data)

// let userDetails = this.user
// if(uname in userDetails){
//   return false

// }
// else{
//   userDetails[uname]={
//     uname,
//      email,
//      ph,
//      password,
//      productName,
//      price,
//      Discription,
//      image

//   }
//    this.saveDetails()
//   return true
// }

}

login(uname:any,pwd:any,email:any){
let userDetails= this.user

if (uname in userDetails){
  if (pwd == userDetails[uname]["password"]){
this.currentUser=userDetails[uname]["uname"]
this.currentPassword=pwd
this.saveDetails()
return  true
  }
  else{
    alert("invalid password")
    return false
  }

 
}
else{
alert("invalid user")
return false
}




}




}
