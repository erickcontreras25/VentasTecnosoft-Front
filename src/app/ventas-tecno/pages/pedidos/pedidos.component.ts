import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../../models/pedidos.models';
import { PedidoService } from '../../services/pedido.service';
import * as moment from 'moment';
import { Producto } from '../../models/producto.models';
import { PedidoProducto } from '../../models/pedidoProducto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styles: [
  ]
})
export class PedidosComponent implements OnInit {

  pedido: Pedidos = new Pedidos();
  pedidoProducto: PedidoProducto = new PedidoProducto();
  pedidos: Pedidos[] = [];
  pedidos2: Pedidos[] = [];

  productos: Producto[] = [];
  producto: Producto = new Producto;

  fecha: Date = new Date();

  constructor(private pedidoService: PedidoService, private productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerPedidos();
    this.obtenerProductos();
  }

  

  obtenerPedidos(){
    this.pedidoService.obtenerPedidos()
          .subscribe( (res) => {
            this.pedidos = res;
            console.log(this.pedidos);
          });
        }

  obtenerPedidoId(id: number){
    this.pedidoService.obtenerPedidoId(id)
          .subscribe((res) => {
            this.pedido = res;
          },
          (err) => {
            console.log(err);
          });
  }

  obtenerPedidoxFecha(fecha: Date){
    this.pedidoService.obtenerPedidoxFechaCreacion(fecha)
          .subscribe((res) => {
            this.pedidos2 = res;
          },
          (err) => {
            console.log(err);
          });
  }

  agregarPedidos(){
    this.pedidoService.agregarPedidos(this.pedido)
          .subscribe((res) => {
            this.pedidos.push(this.pedido);
            this.pedido = new Pedidos();
            this.obtenerPedidos();
          },
          (err) => {
            console.log(err);
          });
  }

  agregarLineaPedido() {
    this.pedido.pedidoProducto.length + 1;
    this.pedido.pedidoProducto.push(this.pedidoProducto);
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
            this.producto=res;
          },
          (err) => {
            console.log(err);
          });
  }

}
