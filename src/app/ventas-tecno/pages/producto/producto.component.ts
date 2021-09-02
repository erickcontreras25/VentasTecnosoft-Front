import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Producto } from '../../models/producto.models';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: [
  ]
})
export class ProductoComponent implements OnInit {

  producto: Producto = new Producto();
  productos: Producto[] = [];

  aux: boolean = false;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }


  obtenerProductos(){
    this.productoService.obtenerProductos()
          .subscribe((res) => {
            this.productos=res;
          },
          (err) => {
            console.log(err);
          });
  }

  obtenerProductoId(id: number){
    this.productoService.obtenerProductoId(id)
      .subscribe((res) => {
        this.aux = true;
        this.producto = res;
      },
      (err) => {
        console.log(err);
      });
  }

  guardarProducto(){

    this.productoService.guardarProducto(this.producto)
          .subscribe((res) => {
            this.productos.push(this.producto);
            this.producto = new Producto();
            this.obtenerProductos();
            this.aux = false;
          })
  }

  modificarProducto(){
    this.productoService.modificarProducto(this.producto.idProducto, this.producto)
      .subscribe((res) => {
        this.aux = false;
        this.producto = new Producto();
        this.obtenerProductos();
      })
  }

  eliminarProducto(id: number){
    this.productoService.eliminarProducto(id)
      .subscribe((res) => {
        window.alert("Eliminado con exito!!");
      })
  }

  clean(){
    this.producto = new Producto();
    this.aux = false;
  }


}
