import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { SayitcomService } from "../sayitcom.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  credintials = {username:'', password:''};
  loginForm : FormGroup;
  alert: Boolean = false;
  
  
  constructor(private Sayitcom: SayitcomService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
	  this.loginForm = this.formBuilder.group({
      username : [null, Validators.required],
      password : [null, Validators.required]
    })
  }
  
  login(){
    console.log(this.credintials);
    this.Sayitcom.getUser(this.credintials).subscribe(data=>{
      if (data['found'] == true){
        localStorage.setItem("Username",this.credintials['username']);
        
        this.router.navigateByUrl("/say/"+localStorage.getItem("Username")+"/home");
      } 
      else {
        this.alert = true;
        this.router.navigateByUrl("");
      } 
    })
    
  }
  
  gotosignup()
  {
	  this.router.navigateByUrl("/signup");
  }

}
