import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { IMqttMessage, MqttModule, MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

    constructor(public toastController: ToastController, private _mqttService: MqttService) { }

    private subscription: Subscription;
    private message: string;
    informacion = {
        humedad: ' - ',
        temperatura: ' - ',
        sensorMQ_9: ' - '
    }
    tempActual: string = "-Sin Datos-";
    humedadActual: string = "-Sin Datos-";
    contaminacionActual: string = "Sin alertas";
    humoActual: string = "Sin alertas";
    contadorAlertas: any = 0;
    estado: any = "No es posible conectar";

    async presentToastWithOptions(mensaje) {
        const toast = await this.toastController.create({
            header: mensaje,
            // message: 'Click para Cerrar',
            duration: 5000,
            position: 'top',
            buttons: [
                {
                    side: 'start',
                    icon: 'warning',
                },
                {
                    text: 'Cerrar',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ],
            color: 'light',
        });
        toast.present();
    }

    ngOnInit() {
        this.subscription = this._mqttService.observe('demostracion').subscribe((message: IMqttMessage) => {
            this.message = JSON.parse(message.payload.toString());
            this.estado = 'Leyendo información desde el servidor';
            console.log(this.message);
            this.tempActual = this.message[2]['valor'];
            this.humedadActual = this.message[3]['valor'];
            this.contaminacionActual = this.message[0]['valor'];
            this.humoActual = this.message[1]['valor'];
            // let arreglo = this.message.split("#");
            // // this.informacion.contaminacion = arreglo[0];
            // this.humedadActual = parseInt(arreglo[2]);
            // this.tempActual = arreglo[1];
            // // console.log(arreglo);
        });


    }

}
