import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Employee } from '../employee.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-employees-detail',
  templateUrl: './employees-detail.component.html',
  styleUrls: ['./employees-detail.component.css']
})
export class EmployeesDetailComponent implements OnInit {

 
  id:number
  index:number
  constructor(private empService:EmployeesService ,  private router:Router , private route:ActivatedRoute)  { }
 employee:Employee
  ngOnInit() {

    this.route.params.subscribe((params:Params)=>{
      this.id= params['id'];
      
   this.empService.moveToEmployeeDetail(this.id).subscribe(data=>{
        this.empService.employee = data.json()
        console.log(data)
      })
      console.log(this.empService.employee)
      console.log(this.id)
    
    })

   
  }
  cancel() {
    this.router.navigate(['../'])
  }
}