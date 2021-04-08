import { Component, OnInit,NgZone } from '@angular/core';//ngzone to inject
import { Router } from '@angular/router';
import {FormGroup,FormsModule,NgForm} from '@angular/forms';
import {ProjectInfoService} from '../../Services/project-info.service';
import {ProjInfoModule} from '../../Modules/proj-info/proj-info.module';

@Component({
  selector: 'app-select-proj-by-id',
  templateUrl: './select-proj-by-id.component.html',
  styleUrls: ['./select-proj-by-id.component.css']
})

export class SelectProjByIDComponent implements OnInit {
  svc: ProjectInfoService;
  prj=new ProjInfoModule();
  ngzone : NgZone;
  //ngzone will inject any service which is external or internal to Angular
  //router class is used to redirect from one angular component to another
  router : Router;
  model:any = [];
  constructor(svc:ProjectInfoService, ngzone : NgZone, router : Router) {//injecting ngzone and router 
    this.svc=svc;
    this.ngzone = ngzone;
    this.router = router;
  }

  projid: number;
  projname: string;
  domain: string;
  ngOnInit(): void {
  }

  PrjData(idform: NgForm):void
  {
    console.log(idform.value);
    this.prj.projid=idform.value.eid;
    this.svc.GetProjById(this.prj.projid).subscribe((data:ProjInfoModule) => 
    {
      this.projid= data.projid;
      this.projname=data.projname;
      this.domain=data.domain;

      console.log(data.projid + "," + data.projname + "," + data.domain );
      //to store in local storage
      //to carry data cross multiple angular components
      localStorage.setItem('PID',this.prj.projid.toString());
      localStorage.setItem('PNAME',this.projname);
      localStorage.setItem('DOMAIN',this.domain);
      //this will store data in local storage
      //to redirect
      this.ngzone.run( () => this.router.navigateByUrl("/UpdateProject"));
    });
  }

}