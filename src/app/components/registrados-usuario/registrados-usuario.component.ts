import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrados-usuario',
  templateUrl: './registrados-usuario.component.html',
  styleUrls: ['./registrados-usuario.component.css']
})
export class RegistradosUsuarioComponent implements OnInit {
  usr_Registrado:any= [];
  constructor(private authServices: AuthService) { }

  ngOnInit(): void {
    this.obtenerRegistrados();
  }
  obtenerRegistrados(){
    this.authServices.obtenerRegistrados()
    .subscribe(registrado =>{
      let registerObj = JSON.parse(JSON.stringify(registrado))
      this.usr_Registrado = registerObj.payload;
      console.log(registrado)
    },
		err => {
			console.log(err)
			alert(err.error.message)
		});
  }

}
