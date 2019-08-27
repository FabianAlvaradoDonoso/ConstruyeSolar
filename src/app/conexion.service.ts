import { Injectable } from '@angular/core';

import * as io from 'socket.io-client'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConexionService {

    private url = "http://convive60prueba1.duckdns.org";
    private socket;

    constructor() {
        this.socket = io(this.url);
    }

    public conexionAlServidor = () => {
        return Observable.create((observador) => {
            this.socket.on('connect_error', () => {
                observador.next({ 'error_conexion': 'No es posible acceder al servidor' });
            });
            this.socket.on('connect', () => {
                observador.next({ 'conexion': 'Conexion exitosa con el servidor!' });
            });
            this.socket.on('conexion_exitosa', (mensaje) => {
                observador.next({ 'servidor': mensaje });
            });
            this.socket.on('disconnect', () => {
                observador.next({ 'desconexion': 'Se ha desconectado el servidor' });
            });
            this.socket.on('data_sensores', (data_sensores) => {
                observador.next({ 'data_sensores': data_sensores });
            });
        });
    }

    public solicitar_data = () => {
        this.socket.emit('cliente_escuchando');
    }

}
