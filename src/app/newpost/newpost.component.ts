import { Component, OnInit } from '@angular/core';
import { SayitcomService } from "../sayitcom.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'https://localhost:1234/data';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  constructor(private saycom: SayitcomService,private router: Router) { }

  data = {catagory:'', photo :'', message:'', username: '', comments: ''};
  file;
  filename: string;
  msg: string;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'bimage' });
  /* previewfile={file:''};; */

  ngOnInit() {
	  this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
    };
  }

  sendstatus: Boolean=false; 
  
  newpost()
  {
	  

    this.data['photo'] = this.file.slice(12);
	this.data['username']=localStorage.getItem("Username");
	this.filename=this.data['photo'] ;
	this.msg=this.data['message'];
	 localStorage.setItem("Filename",this.filename);		//For previewsd
	localStorage.setItem("Message",this.msg);
	console.log("filename stored-----------------------------"+localStorage.getItem("Filename")); 
	console.log("Message stored-----------------------------"+localStorage.getItem("Message"));
	console.log(this.data);
    /* this.saycom.addData(this.data).subscribe(); */ 
	this.sendstatus=true;
    this.router.navigateByUrl("/say/"+localStorage.getItem("Username")+"/new/preview");
	
  }
  
  sendpost()
  {
	  console.log(this.data);
	  this.saycom.addData(this.data).subscribe();
	  this.router.navigateByUrl("/say/"+localStorage.getItem("Username")+"/home");
  }
  

  getUrl()
  {
	  return ('http://localhost:1234/data/view/'+this.filename);
  }
  
  
}
