import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertEmployeeComponent } from './components/insert-employee/insert-employee.component';
import { ShowAllEmployeesComponent } from './components/show-all-employees/show-all-employees.component';
import { ShowEmployeeByIDComponent } from './components/show-employee-by-id/show-employee-by-id.component';
import { LoginComponent} from './Components/login/login.component';
import { DeleteComponent } from './Components/delete/delete.component';

const routes: Routes = [
  {path:'InsertEmployee',component:InsertEmployeeComponent},
  {path:'ShowAllEmployees',component:ShowAllEmployeesComponent},
  {path:'ShowEmployeeByID',component:ShowEmployeeByIDComponent},
  {path:'Login', component:LoginComponent},
  {path: 'Delete',component: DeleteComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }