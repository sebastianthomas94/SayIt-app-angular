import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SayitcomService } from "../sayitcom.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private service: SayitcomService) { }

  datas:any;

  ngOnInit() {
    this.service.getData().subscribe(data=>{
      console.log(data);
      this.datas = data;
    })
  }

  newpost()
  {
    this.router.navigateByUrl("/say/"+localStorage.getItem("Username")+"/new");
  }

}
