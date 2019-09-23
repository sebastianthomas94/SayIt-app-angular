import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SayitcomService } from "../sayitcom.service";

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {

  constructor(private router: Router, private service: SayitcomService) { }
  
  href:String;
	splitted:any;
	datas:any;
	credential = { message:'', splitted: ''}
  ngOnInit() {
	  this.href=this.router.url;
	  console.log(this.href);
	  this.splitted = this.href.split("/"); 
	  this.credential.splitted=this.splitted[4];
	  this.service.viewpost(this.credential).subscribe(data=>{
      console.log(data);
      this.datas = data;
  })
	  
  }

  deletepost()
  {
	  /* this.splitted = this.href.split("/"); 
	  this.credential.splitted=this.splitted[4]; */
	  console.log("Tobe deleted====="+this.credential.splitted);
	  this.service.DeletePost(this.credential).subscribe(data=>{

  })
  }
  
  
}
