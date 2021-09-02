import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente.models';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  obtenerClientes(): Observable<any>{

    return this.http.get(`${URL}/cliente`);
  }

  guardarCliente(cliente: Cliente): Observable<any>{
    
    return this.http.post(`${URL}/cliente`, cliente);
  }

  modificarCliente(id: number, cliente: Cliente): Observable<any>{
    
    return this.http.put(`${URL}/cliente/${id}`, cliente);
  }

  eliminarCliente(id: number): Observable<any>{
    
    return this.http.delete(`${URL}/cliente/${id}`);
  }

}
