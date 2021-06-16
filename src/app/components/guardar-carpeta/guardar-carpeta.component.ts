import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guardar-carpeta',
  templateUrl: './guardar-carpeta.component.html',
  styleUrls: ['./guardar-carpeta.component.css']
})
export class GuardarCarpetaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  SubirPDF(){
    alert('¡GUARDADO!')
  }

}
