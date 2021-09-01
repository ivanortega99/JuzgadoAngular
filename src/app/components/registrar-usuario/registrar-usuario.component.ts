import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { usr_UserModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  usr_Registrado: any = [];
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.usr_Registrado = new usr_UserModel();
  }
  newUser(form: NgForm) {
    this.auth.nuevoUsuario(this.usr_Registrado).subscribe(
      res => {
        this.usr_Registrado = res.payload;
        console.log(res)
      },
      err => {
        console.log(err)
        alert(err.error.message)
      }
    );
  }
}
