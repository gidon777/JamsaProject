import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from '../employees/employee.model';


@Pipe({name :'employeesFilter'})
export class FilterSearch implements PipeTransform {
transform(employees:Employee[] , searchTerm:string):Employee[] {
  if(!employees || !searchTerm) {
      return employees
  }
 return employees.filter(employee=> employee.firstname.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1 )
}
}