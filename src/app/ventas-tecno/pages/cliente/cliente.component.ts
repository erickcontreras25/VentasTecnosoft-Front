import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente.models';
import { ClienteService } from '../../services/cliente.service';
import { NgForm } from '@angular/forms';
import { Pedidos } from '../../models/pedidos.models';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: [
  ]
})
export class ClienteComponent implements OnInit {

  hayError: boolean = false;

  cliente: Cliente = new Cliente();
  clientes: Cliente[] = [];

  pedidos: Pedidos[] = [];

  constructor(private clienteService: ClienteService, private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(){
    this.hayError = false;

    this.clienteService.obtenerClientes()
          .subscribe( (res) => {
            this.clientes = res;
          }, (err) => {
            this.hayError = true;
            console.log('ERROR');
            console.info(err);
          }
          );
  }

  guardarCliente(){
    this.clienteService.guardarCliente(this.cliente)
          .subscribe((res) => {
            this.clientes.push(this.cliente);
            this.cliente = new Cliente();
            this.obtenerClientes();
          },(err) =>{
            console.log(err);
          })
    
  }

  obtenerPedidoxCliente(id: number){
    this.pedidoService.obtenerPedidoxCliente(id)
          .subscribe((res) => {
            this.pedidos = res;
          },
          (err) => {
            console.log(err);
          });
  }

}
