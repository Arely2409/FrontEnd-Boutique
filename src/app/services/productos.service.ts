import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  URL_API = 'http://127.0.0.1:8000/';
  products:Producto []=[];
  selectedProduct:Producto ={
    codigo: 0,
    tipo_prenda: "",
    talla: 0,
    marca: "",
    color: "",
    precio: 0,
    existencias: 0
  }
  update:boolean=false;

  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get<Producto[]>(this.URL_API+'getAll');
  }
  addProducts(producto:Producto){
    return this.http.post(this.URL_API+'insert', producto);
  }

  deleteProduct(codigo:Number){
    return this.http.delete(this.URL_API+'deleteOne/'+codigo);
  }
  updateProduct(producto:Producto){
    return this.http.put(this.URL_API+'updateOne/'+producto.codigo,producto);
  }
}