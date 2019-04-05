import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { FilterSearch } from '../shared/filter-search.pipe';
@NgModule({
declarations:[ 
    EmployeesComponent,
    EmployeesListComponent,
    EmployeesEditComponent,
    EmployeesDetailComponent,
    FilterSearch
] ,
    
    
imports:
[CommonModule,
    EmployeesRoutingModule ,
    ReactiveFormsModule,
    FormsModule

]
})

export class EmployeesModule {

}
