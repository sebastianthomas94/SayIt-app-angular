import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {


  /* filename:String=localStorage.getItem("Filename");
  msg:String=localStorage.getItem("Message"); */
  constructor() {
/* while(1) this.msg=localStorage.getItem("Message"); */	}


  ngOnInit() {
	 
	  /* console.log("Got file name in preview_______"+this.filename);
	  console.log("Got message in preview_______"+this.msg); */
  }

  
}
