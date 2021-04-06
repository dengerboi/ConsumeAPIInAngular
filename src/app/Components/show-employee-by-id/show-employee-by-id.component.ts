import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-show-employee-by-id',
  templateUrl: './show-employee-by-id.component.html',
  styleUrls: ['./show-employee-by-id.component.css']
})
export class ShowEmployeeByIDComponent implements OnInit {
  model:any = [];
  constructor() { }

  ngOnInit(): void {
  }
  ShowDataById(Showform: NgForm) : void{
    console.log(Showform.value);
  }
}