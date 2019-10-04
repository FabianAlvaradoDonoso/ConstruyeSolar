import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../conexion.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private conexion: ConexionService, public toastController: ToastController) { }

  estado_websockets: string = "No es posible conectar";
  informacion = {
      humedad: ' - ',
      temperatura: ' - ',
      sensorMQ_9: ' - '
  }
  tempActual: string = "-Sin Datos-";
  humedadActual: string = "-Sin Datos-";
  alertasActual: string = "Sin alertas";
  contadorAlertas: any = 0;
  estado: any;

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
      this.estado = "";
      this.conexion.conexionAlServidor().subscribe((mensaje: any) => {
          if (mensaje.error_conexion) {
              this.estado = mensaje.error_conexion;
          }

          if (mensaje.desconexion) {
              this.presentToastWithOptions(mensaje.desconexion);
              console.log('Se ha desconectado el servidor');
              this.estado_websockets = "Desconectado";
          }

          if (mensaje.conexion) {
              this.estado = mensaje.conexion;
              console.log(mensaje.conexion);
              this.estado_websockets = "Conectado";
              this.presentToastWithOptions(mensaje.conexion);
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
              this.informacion.humedad = mensaje.data_sensores.data_sensores[0];
              this.informacion.temperatura = mensaje.data_sensores.data_sensores[1];
              this.informacion.sensorMQ_9 = mensaje.data_sensores.data_sensores[2];

              console.log(mensaje.data_sensores.data_sensores);
              this.tempActual = mensaje.data_sensores.data_sensores + "°C";
              this.humedadActual = String(Number(mensaje.data_sensores.data_sensores) * 20 / 9.8).slice(0, 5) + "%";
              if (Number(mensaje.data_sensores.data_sensores > 28)) {
                  this.contadorAlertas += 1;
              }
              if (this.contadorAlertas > 0) {
                  this.alertasActual = "Tienes alertas por revisar. Cantidad de alertas: " + String(this.contadorAlertas);
              }
          }

      });

  }

}
