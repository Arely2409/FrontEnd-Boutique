import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor( public studentsService:AlumnosService){}

  addStudent(form:NgForm){
    this.studentsService.addStudents(form.value).subscribe(
      res => {
        form.reset();
        this.studentsService.getAllStudents().subscribe(
          res => {
            this.studentsService.students = res;
            console.log(res);
          }, err => console.error(err)
        )
      }, err => console.error(err)
      
    )
  }

  updateStudent(form:NgForm){
    this.studentsService.updateStudent(form.value).subscribe(
      res => {
        this.studentsService.update=false;
        form.reset();
        this.studentsService.getAllStudents().subscribe(
          res => {
            this.studentsService.students = res;
            console.log(res);
          }, err => console.error(err)
        )
      }, err => console.error(err)
      
    )
  }

}
