export interface Usuarios {
    payload: Payload;
}

interface Payload {
    usuario: Usuario;
}

interface Usuario {
    id_usuario?: number;
    id_tipo_usuario: number;
    nombre_usuario: string;
    apellidos_usuario: string;
    email: string;
    username: string;
    tipo_usuario: string;
    constrasena: string;
}