import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-say',
  templateUrl: './say.component.html',
  styleUrls: ['./say.component.css']
})
export class SayComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout()
  {
	  localStorage.clear();
	  this.router.navigateByUrl("/");
  }
  
  home()
  {
    this.router.navigateByUrl("/say/"+localStorage.getItem("Username")+"/home");
  }
  
  create()
  {
	  this.router.navigateByUrl("/say/"+localStorage.getItem("Username")+"/new");
  }
  
  myposts()
  {
	  this.router.navigateByUrl("/say/"+localStorage.getItem("Username")+"/myposts");
  }

}
