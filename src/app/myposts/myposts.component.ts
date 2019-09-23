import { Component, OnInit } from '@angular/core';
import { SayitcomService } from "../sayitcom.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {

  constructor(private service: SayitcomService) { }

    datas:any;
	username:String;
	click:boolean;
	credential = { message:'', username: ''}
  ngOnInit() {
	  this.username=localStorage.getItem("Username");
	  this.credential.username=localStorage.getItem("Username");
	  this.service.getMyData(this.credential).subscribe(data=>{
      console.log(data);
      this.datas = data;
	  this.click=false;
  })
  }
}
