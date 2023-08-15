import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../models/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  URL_API = 'http://127.0.0.1:8000/';
  students:Alumno []=[];
  selectedStudent: Alumno ={
    matricula: "",
    nombre: "",
    apellidos: "",
    cuatrimestre: 0,
    promedio: 0
  }
  update:boolean=false;

  constructor(private http:HttpClient) { }
  getAllStudents(){
    return this.http.get<Alumno[]>(this.URL_API+'getAll');
  }
  addStudents(alumno:Alumno){
    return this.http.post(this.URL_API+'insert', alumno);
  }

  deleteStudent(matricula:String){
    return this.http.delete(this.URL_API+'deleteOne/'+matricula);
  }
  updateStudent(alumno:Alumno){
    return this.http.put(this.URL_API+'updateOne/'+alumno.matricula,alumno);
  }

  

}
