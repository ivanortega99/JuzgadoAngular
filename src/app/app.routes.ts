import { Routes } from "@angular/router";
import { AdminMenuComponent } from "./components/admin-menu/admin-menu.component";
import { CrearCarpetaComponent } from "./components/crear-carpeta/crear-carpeta.component";
import { CrearNotificacionComponent } from "./components/crear-notificacion/crear-notificacion.component";
import { GeneradasNotificacionComponent } from "./components/generadas-notificacion/generadas-notificacion.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistradosUsuarioComponent } from "./components/registrados-usuario/registrados-usuario.component";
import { RegistrarUsuarioComponent } from "./components/registrar-usuario/registrar-usuario.component";

export const ROUTES: Routes = [
    {path:'login', component: LoginComponent},
    {path:'menu', component: AdminMenuComponent},
    {path:'crear-carpeta', component: CrearCarpetaComponent},
    {path:'crear-notificacion', component: CrearNotificacionComponent},
    {path:'generar-notificacion', component: GeneradasNotificacionComponent},
    {path:'registrar-usuario', component: RegistrarUsuarioComponent},
    {path:'registrados-usuario', component: RegistradosUsuarioComponent},
    {path:'**', pathMatch: 'full', redirectTo: 'login'}
]