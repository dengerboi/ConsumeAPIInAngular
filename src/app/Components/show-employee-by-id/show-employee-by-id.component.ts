import { Component, OnInit } from '@angular/core';
import {FormGroup,FormsModule,NgForm} from '@angular/forms';
import {EmployeeInfoService} from 'src/app/services/employee-info.service';
import {EmpInfoModule} from 'src/app/modules/emp-info/emp-info.module';

@Component({
  selector: 'app-show-employee-by-id',
  templateUrl: './show-employee-by-id.component.html',
  styleUrls: ['./show-employee-by-id.component.css']
})
export class ShowEmployeeByIDComponent implements OnInit {
  svc: EmployeeInfoService;
  emp=new EmpInfoModule();

  model:any = [];
  constructor(svc:EmployeeInfoService) { 
    this.svc=svc;
  }

  employeeid: number;
  empname: string;
  dept: string;
  desg: string;
  salary: number;
  projid: number;
  ngOnInit(): void {
  }

  EmpData(idform: NgForm):void
  {
    console.log(idform.value);
    this.emp.EmpID=idform.value.eid;

    this.svc.GetEmployeeByID(this.emp.EmpID).subscribe((data:EmpInfoModule) => 
    {
      this.employeeid= data.EmpID;
      this.empname=data.EmpName;
      this.dept=data.Dept;
      this.desg=data.Desg;
      this.salary=data.Salary;
      this.projid=data.projid;

      console.log(data.EmpID + "," + data.EmpName + "," + data.Dept + "," + data.Desg + "," + data.Salary + "," + data.projid );
      //alert(data.empid + "," + data.empname + "," + data.dept + "," + data.desg + "," + data.salary + "," + data.projid );
    });
  }

}