import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedidos } from '../models/pedidos.models';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  obtenerPedidos(): Observable<any> {
    const url = `${URL}/pedidos`;
    return this.http.get(url);
  }

  obtenerPedidoId(id: number): Observable<any> {
    const url = `${URL}/pedidos/${id}`;
    return this.http.get(url);
  }

  obtenerPedidoxFechaCreacion(fecha: Date): Observable<any> {
    const url = `${URL}/pedidos/xFechaCreacion?n1=${fecha}`;
    return this.http.get(url);
  }

  obtenerPedidoxCliente(xCliente: number): Observable<any> {
    const url = `${URL}/pedidos/xCliente?n1=${xCliente}`;
    return this.http.get(url);
  }

  agregarPedidos(pedido: Pedidos): Observable<any> {
    const url = `${URL}/pedidos`;
    return this.http.post(url, pedido);
  }

  modificarPedido(id: number, pedido: Pedidos): Observable<any> {
    const url = `${URL}/pedidos/${id}`;
    return this.http.put(url, pedido);
  }

  eliminarPedido(id: number): Observable<any> {
    const url = `${URL}/pedidos/${id}`;
    return this.http.delete(url);
  }
}
