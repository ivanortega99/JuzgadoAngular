import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  panelOpenState = false;
  opcionActiva = "";
  
  Menu=[
    {name:"Carpeta",icon:"folder_open",SubMenu:[
      {opc:"Crear",link:"/crear-carpeta"},
      {opc:"ver",link:"/ver-carpeta"},
      {opc:"Guardar",link:"/guardar-carpeta"},
      {opc:"Minutas",link:"/crear-minuta"},
    ]},
    {name:"Notificaciones",icon:"message",SubMenu:[
      {opc:"Crear",link:"/crear-notificacion"},
      {opc:"Generadas",link:"/generar-notificacion"}
    ]},
    {name:"Usuarios",icon:"account_circle",SubMenu:[
      {opc:"Registrar",link:"/registrar-usuario"},
      {opc:"Registrados",link:"/registrados-usuario"},
      {opc:"Partes",link:"/crear-carpeta"}
    ]},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  cambiarActivo(opc){
    this.opcionActiva=opc;
    console.log(opc)
  }
}
