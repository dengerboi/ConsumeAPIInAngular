import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpInfoModule } from 'src/app/modules/emp-info/emp-info.module';
import { EmployeeInfoService } from 'src/app/services/employee-info.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  model:any=[];
  svc:EmployeeInfoService;
  id:number;
  constructor(svc:EmployeeInfoService) {
    this.svc=svc;
   }

  ngOnInit(): void {
  }
  DeleteEmployee(empIdForm:NgForm):void{
    this.id = empIdForm.value.eid;
    this.svc.DeleteEmployee(this.id).subscribe((data:boolean)=>{
      if(data==true){
        alert("Employee Deleted");
      }
      else{
        alert("No Deletions");
      }
    })
  }

}