import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { InsertEmployeeComponent } from './components/insert-employee/insert-employee.component';
import { ShowAllEmployeesComponent } from './components/show-all-employees/show-all-employees.component';
import { ShowEmployeeByIDComponent } from './components/show-employee-by-id/show-employee-by-id.component';
import { LoginComponent } from './Components/login/login.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { SelectProjByIDComponent } from './Components/select-proj-by-id/select-proj-by-id.component';
import { UpdateProjectComponent } from './Components/update-project/update-project.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertEmployeeComponent,
    ShowAllEmployeesComponent,
    ShowEmployeeByIDComponent,
    LoginComponent,
    DeleteComponent,
    SelectProjByIDComponent,
    UpdateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }