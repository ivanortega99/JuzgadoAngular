import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usr_UserModel } from '../models/usuario.model';
import { Usuarios } from '../models/usuarios.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3005/api';

  constructor(private http: HttpClient) { }

  login(usuario: usr_UserModel) {
    return this.http.post<Object>(`${this.url}/login`, usuario);
  }

  obtenerRegistrados(){
    return this.http.get<Usuarios>(`${this.url}/usuarios`);
  }
  
  nuevoUsuario(usuario: usr_UserModel) {
    return this.http.post<Usuarios>(`${this.url}/usuarios/`, usuario);
  }

}
