import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Employee } from '../employee.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
subscription:Subscription
searchTerm:string
id:number

  constructor(private empService:EmployeesService , private router: Router) { 

  
  }
   

   

  ngOnInit() {

   this.empService.getAllEmployees().subscribe(data=>{
     this.empService.employees = data.json()
     console.log(  this.empService.employees)
     
    })

    
    
    
   
   

     }

    
     deleteEmployee(id:number) {
    console.log(id)
    let deletedEmployee
      this.empService.deleteEmployee(id).subscribe(data=>{
       console.log(data.json())


       this.empService.getAllEmployees().subscribe(data=>{
        deletedEmployee = data.json()
         this.empService.employees = deletedEmployee
       })

      })
       
     }
  

    

  }



  
 

  
 


