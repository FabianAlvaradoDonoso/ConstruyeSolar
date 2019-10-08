import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ConexionService } from './conexion.service';
import { BarraComponent } from './pages/barra/barra.component';


import {
  IMqttMessage,
  MqttModule,
  MqttService
} from 'ngx-mqtt';

export const MQTT_SERVICE_OPTIONS = {
  connectOnCreate: true,
  hostname: 'convive60.duckdns.org',
  port: 80,
  path: '/'
};

export function mqttServiceFactory() {
  return new MqttService(MQTT_SERVICE_OPTIONS);
};


@NgModule({
  declarations: [
    AppComponent,
    BarraComponent

  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ConexionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
