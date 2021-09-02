import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './ventas-tecno/pages/cliente/cliente.component';
import { PedidosComponent } from './ventas-tecno/pages/pedidos/pedidos.component';
import { ProductoComponent } from './ventas-tecno/pages/producto/producto.component';
import { UsuarioComponent } from './ventas-tecno/pages/usuario/usuario.component';

const routes: Routes = [
  {
    path: 'pedidos',
    component: PedidosComponent,
},
{
    path: 'cliente',
    component: ClienteComponent,
},
{
    path: 'producto',
    component: ProductoComponent,
},
{
    path: 'usuario',
    component: UsuarioComponent,
},
{
    path: '**',
    redirectTo: '',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
