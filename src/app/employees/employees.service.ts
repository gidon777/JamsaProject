import { Injectable, OnInit, } from "@angular/core";
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, BehaviorSubject, Subscription, Observable } from 'rxjs';
import { Employee } from './employee.model';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class EmployeesService implements OnInit {
    submitted:boolean;
  ShowSuccessMessageCreate:boolean;
  ShowSuccessMessageUpdate:boolean
  employee:Employee
 
      employees:Employee[];
   id:number
    form = new FormGroup ({
        id:new FormControl(null),
        firstname:new FormControl('' , Validators.required),
        lastname:new FormControl('' , Validators.required   ),
        age:new FormControl('' , [Validators.required ,  Validators.max(120)]),
        position:new FormControl('' ,  Validators.required),
        image:new FormControl('' ,  Validators.required)
      });
      formControls = this.form.controls;
      newEmployee= this.form.value
constructor(private http:Http ,  private router:Router) {

}
    ngOnInit() {

}

getAllEmployees() {
   
    return this.http.get('http://localhost/angularproject/rest/employee/EmployeeList')
   

    
 

}

createEmployee() {
 
 

 return   this.http.get('http://localhost/angularproject/rest/employee/CreateEmployee?firstname='+this.form.value.firstname + '&lastname='+ this.form.value.lastname + '&age='+this.form.value.age + '&position='+this.form.value.position + '&image='+this.form.value.image )


 

}
deleteEmployee(id:number) {
  
    return this.http.get('http://localhost/angularproject/rest/employee/deleteemployee?id='+id)
}
moveToEmployeeCreate() {
    this.router.navigate(['employees-edit-new'])
    this.form.reset()
}
updateEmployee(employee:Employee) {

    return this.http.get('http://localhost/angularproject/rest/employee/UpdateEmployee?id='+this.form.value.id + '&firstname='+ this.form.value.firstname + '&lastname='+this.form.value.lastname + '&age='+this.form.value.age + '&position='+this.form.value.position  + '&image='+this.form.value.image)
}
moveToEmployeeUpdate(employee:Employee) {

    this.id = employee.id
    this.router.navigate([this.id,'employees-edit-update'])
    this.form.setValue(employee)
}



moveToEmployeeDetail(id:number) {
  
    this.id = id
    //console.log(this.id)
    this.router.navigate([this.id , 'employees-detail'])
  
    return this.http.get('http://localhost/angularproject/rest/employee/get?id=' +this.id)

}







 
}