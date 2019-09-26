import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConexionService } from './conexion.service';
import { ComponentsModule } from './components/components.module';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      ComponentsModule
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
