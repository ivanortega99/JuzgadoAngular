import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { usr_UserModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private url = "http://localhost:3005/api/login"
  usuario:usr_UserModel;

  constructor(private auth: AuthService, private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.usuario=new usr_UserModel();
	// console.log('user', this.usuario)
  }

//   onSubmit(form:NgForm) {
//     if(form.invalid){return;}

//     console.log("Formulario Enviado")
//     console.log(this.usuario)
//     console.log(form)
//   }

login(form:NgForm) {
	console.log('make login');

	this.auth.login(this.usuario).subscribe(
		res => {
      // let response = {...res}
      let response = JSON.parse(JSON.stringify(res));
			alert(response.message);
			this.router.navigateByUrl('/menu');
		},
		err => {
			console.log(err)
			alert(err.error.message)
		}
	)
	// this.auth.login(this.usuario)
    //   .subscribe(resp =>{
    //     if(resp==200){
    //       this.router.navigateByUrl('/menu');
    //     }else{
    //       alert("Contraseña Incorrecta")
    //     }
    //   },(err)=>{
    //     console.log(err);
    //   })
}

//   login(form:NgForm){
//     if(form.invalid){return;}

// 	console.log('make login')

//     //const headers = {"content-type": "application/json"};
    
//     /*console.log('imprimir si el formulario es valido')
//       this.http.post<any>(this.url, JSON.stringify(this.usuario),{headers: {"content-type": "application/json"}}).subscribe ({
//         next: data => {
//             console.log("JALAAAAAAAAAAA")
//             this.router.navigateByUrl('/menu');
//         },
//         error: error => {
//             console.log(error.message);
//             console.error('There was an error!', error);
//         }
//     })*/

    // this.auth.login(this.usuario)
    //   .subscribe( resp =>{
    //     console.log(resp)
    //     if(resp==200){
    //       this.router.navigateByUrl('/menu');
    //     }else{
    //       alert("Contraseña Incorrecta")
    //     }
    //   },(err)=>{
    //     console.log(err);
	// 	// console.log(err.error.error.message)
    //   })

//   }
}
