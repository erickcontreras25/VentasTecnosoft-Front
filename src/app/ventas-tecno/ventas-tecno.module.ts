import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PedidoComponent } from './component/pedido/pedido.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';



@NgModule({
  declarations: [
    PedidoComponent,
    PedidosComponent,
    ClienteComponent,
    ProductoComponent,
    UsuarioComponent,
    SidebarComponent
  ],
  exports:[
    PedidoComponent,
    PedidosComponent,
    ClienteComponent,
    ProductoComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class VentasTecnoModule { }
