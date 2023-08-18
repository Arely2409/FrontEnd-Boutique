import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent  {
 
  constructor(public productosService:ProductosService){}

  ngOnInit(){
    this.getAllProducts();
  }
  
  getAllProducts(){
    this.productosService.getAllProducts().subscribe(
      res => {
        this.productosService.products = res;
        console.log(res);
      }, err => console.error(err)
    )
  }

  deleteProduct(codigo:Number){
    this.productosService.deleteProduct(codigo).subscribe(
      res => this.getAllProducts(),
      err => console.error(err)
    )
  }
  
  getProduct(producto:Producto){
    this.productosService.selectedProduct = producto;
    this.productosService.update=true;
  }



}
