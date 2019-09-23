import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SayitcomService {

  constructor(private http: HttpClient) { }

  getData(){
	  
    return this.http.get("http://localhost:1234/data/all");
  }
  
  
  viewpost(credentials)
  {
    console.log("Printing from service viewpoost()____________id: "+credentials)
	  return this.http.post("http://localhost:1234/data/viewone",credentials);
  }
  
  DeletePost(credentials)
  {
	 return this.http.post("http://localhost:1234/data/deletepost",credentials);
  }
  
  
  getMyData(credentials)
  {
	  return this.http.post("http://localhost:1234/data/mydata",credentials);
  }

  checkUsernameEmail(user){
    return this.http.get("http://localhost:1234/signup/"+user['username'])
  }

  addUser(user){
    return this.http.post("http://localhost:1234/signup", user)
  }

   getUser(user){
	   console.log("Signing in......");
    return this.http.post("http://localhost:1234/login", user);
	
  }

  addData(data)
  {
	 console.log("adding data......"); 
    return this.http.post("http://localhost:1234/data", data);
  }
}
