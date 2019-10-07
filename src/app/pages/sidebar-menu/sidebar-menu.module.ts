import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SidebarMenuPage } from './sidebar-menu.page';

const routes: Routes = [
    {
        path: '',
        component: SidebarMenuPage,
        children: [
            {
                path: 'contaminacion',
                loadChildren: '../contaminacion/contaminacion.module#ContaminacionPageModule'
            },
            {
                path: 'humedad',
                loadChildren: '../humedad/humedad.module#HumedadPageModule'
            },
            {
                path: 'temperatura',
                loadChildren: '../temperatura/temperatura.module#TemperaturaPageModule'
            },
            {
                path: 'gas',
                loadChildren: '../gas/gas.module#GasPageModule'
            },
            // {
            //     path: 'alerta',
            //     loadChildren: '../alerta/alerta.module#AlertaPageModule'
            // },
            {
                path: 'inicio',
                loadChildren: '../inicio/inicio.module#InicioPageModule'
            },
            {
                path: 'tabs',
                loadChildren: '../tabs/tabs.module#TabsPageModule'
            },
        ]
    },
    {
        path: '',
        redirectTo: 'inicio'
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [SidebarMenuPage]
})
export class SidebarMenuPageModule { }
