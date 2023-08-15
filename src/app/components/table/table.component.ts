import { Component } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Alumno } from 'src/app/models/Alumno';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent  {
 
  constructor(public alumnosService:AlumnosService){}

  ngOnInit(){
    this.getAllStudents();
  }
  
  getAllStudents(){
    this.alumnosService.getAllStudents().subscribe(
      res => {
        this.alumnosService.students = res;
        console.log(res);
      }, err => console.error(err)
    )
  }

  deleteStudent(matricula:String){
    this.alumnosService.deleteStudent(matricula).subscribe(
      res => this.getAllStudents(),
      err => console.error(err)
    )
  }
  
  getStudent(alumno:Alumno){
    this.alumnosService.selectedStudent = alumno;
    this.alumnosService.update=true;
  }



}
