import { Component, OnInit ,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { Employee } from '../employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.css']
})
export class EmployeesEditComponent implements OnInit {
  submitted:boolean;
  ShowSuccessMessageCreate:boolean;
  ShowSuccessMessageUpdate:boolean

  constructor(private empService:EmployeesService ,private router:Router) { }
  
  formControls = this.empService.form.controls;
  newEmployee
  id:number
  ngOnInit() {
  
  }
  onSubmit() {
 
    this.submitted = true;
    if(this.empService.form.valid) {
    if(this.empService.form.get('id').value ==null) {
      this.ShowSuccessMessageCreate = true;
      this.empService.createEmployee().subscribe(data=>{
        console.log(data.json())
      this.newEmployee = data.json()
      //this.empService.employees.push(this.newEmployee)  
      this.empService.getAllEmployees().subscribe(data=>{
        this.newEmployee = data.json()
        this.empService.employees = this.newEmployee
        this.empService.form.reset()
        this.router.navigate(['../'])

      })
    })
       
            console.log(this.empService.employees)
       
         
      
      setTimeout(()=>this.ShowSuccessMessageCreate=false , 3000)
    console.log("yes")
    }
    
      
      
      else {
              let updateEmployee
           this.empService.updateEmployee(this.newEmployee).subscribe(data=>{
             console.log(data.json())
                 this.newEmployee = data.json()
               this.id =   this.empService.form.value.id
               console.log(this.id)  
             
              this.empService.getAllEmployees().subscribe(data=>{
               updateEmployee = data.json()
                this.empService.employees = updateEmployee
                this.empService.form.reset()
                this.router.navigate(['../'])
              })
             
           })

  
      }
      
     
      }
    


  }
  cancel() {
  this.router.navigate(['../'])
}
  
}
