import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor( public productsService:ProductosService){}

  addProduct(form:NgForm){
    this.productsService.addProducts(form.value).subscribe(
      res => {
        form.reset();
        this.productsService.getAllProducts().subscribe(
          res => {
            this.productsService.products = res;
            console.log(res);
          }, err => console.error(err)
        )
      }, err => console.error(err)
      
    )
  }

  updateProduct(form:NgForm){
    this.productsService.updateProduct(form.value).subscribe(
      res => {
        this.productsService.update=false;
        form.reset();
        this.productsService.getAllProducts().subscribe(
          res => {
            this.productsService.products = res;
            console.log(res);
          }, err => console.error(err)
        )
      }, err => console.error(err)

    )
  }

}
