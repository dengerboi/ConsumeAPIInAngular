import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpInfoModule } from 'src/app/modules/emp-info/emp-info.module';
import { EmployeeInfoService } from 'src/app/services/employee-info.service';
import{ProjInfoModule} from '../../Modules/proj-info/proj-info.module';
import{ProjectInfoService} from '../../Services/project-info.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  model:any = [];
  svc:EmployeeInfoService;
  svc1: ProjectInfoService;
  plist: ProjInfoModule[];
  emp=new EmpInfoModule();
  constructor(svc:EmployeeInfoService,svc1:ProjectInfoService) {
    this.svc=svc;
    this.svc1=svc1;
   }

  ngOnInit(): void {
    this.svc1.GetProjects().subscribe((data:ProjInfoModule[])=>{
      this.plist=data;
    });
  }
  UpdateData(empForm:NgForm):void{
    console.log(empForm.value);
    this.emp.EmpID = empForm.value.eid;
    this.emp.EmpName = empForm.value.name;
    this.emp.Dept = empForm.value.dept;
    this.emp.Desg = empForm.value.desg;
    this.emp.Salary=empForm.value.salary;
    this.emp.projid=empForm.value.pid;
    this.emp.password=empForm.value.pwd;
    this.svc.UpdateEmployee(this.emp.EmpID,this.emp).subscribe((data:boolean)=>{
      console.log(data);
      if(data==true){
        alert("New Employee Updated");
      }
    })
  }
}

