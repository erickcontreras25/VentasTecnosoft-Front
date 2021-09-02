import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.models';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  ur: string = "tipoUsuario";

  constructor(private http: HttpClient) { }

  obtenerUsuario(): Observable<any>{

    return this.http.get(`${URL}/${this.ur}`);
  }

  guardarUsuario(usuario: Usuario): Observable<any>{
    
    return this.http.post(`${URL}/tipoUsuario`, usuario);
  }

  modificarUsuario(id: number, usuario: Usuario): Observable<any>{
    
    return this.http.put(`${URL}/tipoUsuario/${id}`, usuario);
  }

  eliminarUsuario(id: number): Observable<any>{
    
    return this.http.delete(`${URL}/tipoUsuario/${id}`);
  }

}
