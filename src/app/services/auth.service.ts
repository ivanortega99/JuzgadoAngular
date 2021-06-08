import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usr_UserModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:3000/api/login"

  constructor(private http:HttpClient) { }

  login(usuario:usr_UserModel){
    return this.http.post(
      this.url,
      JSON.stringify(usuario));
  }
}
