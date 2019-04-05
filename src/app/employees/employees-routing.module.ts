import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';



const employeesRoutes: Routes = [
  {path:'' , component:EmployeesComponent , children:[

    {path:'employees-list' , component:EmployeesListComponent},
    {path:'employees-edit-new' , component:EmployeesEditComponent},
    {path:':id/employees-edit-update' , component:EmployeesEditComponent},
    {path:':id/employees-detail' , component:EmployeesDetailComponent}
  ]}
];
@NgModule({
    imports: [RouterModule.forChild(employeesRoutes)],
    exports: [RouterModule]
  })
export class EmployeesRoutingModule {

}