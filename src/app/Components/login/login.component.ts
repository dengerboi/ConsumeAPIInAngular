import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpInfoModule } from 'src/app/modules/emp-info/emp-info.module';
import { EmployeeInfoService } from 'src/app/services/employee-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  svc : EmployeeInfoService;
  name:string;
  pwd:string;
  model:any=[];
  emp=new EmpInfoModule;
    constructor(svc: EmployeeInfoService) { 
  this.svc=svc;
    }
  
  
  
    ngOnInit(): void {
    }
  Login(empForm:NgForm):void {
  
    console.log(empForm.value);
  this.name=empForm.value.name;
  this.pwd=empForm.value.pwd;
  
  this.svc.Login(this.name,this.pwd).subscribe((data:String)=>{
  console.log(data);
  if (data=="Login Successful")
  {
    alert('Login Successful')
  }
  else
  {
    alert('Invalid Creds')
  }
  });
  
  }
  }