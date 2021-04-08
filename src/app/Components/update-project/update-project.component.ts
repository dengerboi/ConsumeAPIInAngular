import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  pid : any;
  pname : string;
  domain : string;
  constructor() { }

  ngOnInit(): void {// to retrive value from select
  this.pid = localStorage.getItem("PID");  
  this.pname = localStorage.getItem("PNAME");
  this.domain = localStorage.getItem("DOMAIN");
  alert(this.pid + " , " + this.pname + " , " + this.domain);
  }

}
