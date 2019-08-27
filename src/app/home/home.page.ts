import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(private conexion: ConexionService) { }

    estado_websockets: string = "No es posible conectar";
    informacion = {
        humedad: ' - ',
        temperatura: ' - ',
        sensorMQ_9: ' - '
    }

    ngOnInit() {
        this.conexion.conexionAlServidor().subscribe((mensaje: any) => {
            if (mensaje.desconexion) {
                console.log('Se ha desconectado el servidor');
                this.estado_websockets = "Desconectado";
            }

            if (mensaje.conexion) {
                console.log(mensaje.conexion);
                this.estado_websockets = "Conectado";
                setInterval(() => {
                    this.conexion.solicitar_data();
                }, 2000)
            }

            if (mensaje.servidor)
                console.log("Servidor: ", mensaje.servidor.mensaje);

            if (mensaje.error_conexion) {
                console.log(mensaje.error_conexion);
                this.estado_websockets = "No es posible conectar";
            }

            if (mensaje.data_sensores) {
                // let humedad = mensaje.data_sensores.data_sensores[0];
                // let temperatura = mensaje.data_sensores.data_sensores[1];
                // let mq_9 = mensaje.data_sensores.data_sensores[2];
                // console.log(`Humedad: ${humedad}%`);
                // console.log(`Temperatura: ${temperatura}°C`);
                // console.log(`Sensor MQ-9: ${mq_9}`);
                this.informacion.humedad = mensaje.data_sensores.data_sensores[0];
                this.informacion.temperatura = mensaje.data_sensores.data_sensores[1];
                this.informacion.sensorMQ_9 = mensaje.data_sensores.data_sensores[2];
                console.log(mensaje.data_sensores.data_sensores);
            }

        });
    }
}
