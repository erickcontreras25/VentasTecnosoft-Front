import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/producto.models';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  ur: string = "producto";

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<any>{

    return this.http.get(`${URL}/${this.ur}`);
  }

  obtenerProductoId(id: number): Observable<any>{

    return this.http.get(`${URL}/${this.ur}/${id}`);
  }

  guardarProducto(producto: Producto): Observable<any>{
    
    return this.http.post(`${URL}/producto`, producto, {responseType: 'text'});
  }

  modificarProducto(id: number, producto: Producto): Observable<any>{
    
    return this.http.put(`${URL}/producto/${id}`, producto);
  }

  eliminarProducto(id: number): Observable<any>{
    
    return this.http.delete(`${URL}/producto/${id}`);
  }
}
