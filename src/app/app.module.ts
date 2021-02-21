import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material'
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ROUTES } from './app.routes';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { CrearCarpetaComponent } from './components/crear-carpeta/crear-carpeta.component';
import { CrearMinutaComponent } from './components/crear-minuta/crear-minuta.component';
import { CrearNotificacionComponent } from './components/crear-notificacion/crear-notificacion.component';
import { GeneradasNotificacionComponent } from './components/generadas-notificacion/generadas-notificacion.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { RegistradosUsuarioComponent } from './components/registrados-usuario/registrados-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminMenuComponent,
    CrearCarpetaComponent,
    CrearMinutaComponent,
    CrearNotificacionComponent,
    GeneradasNotificacionComponent,
    RegistrarUsuarioComponent,
    RegistradosUsuarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES,{useHash:true}),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
