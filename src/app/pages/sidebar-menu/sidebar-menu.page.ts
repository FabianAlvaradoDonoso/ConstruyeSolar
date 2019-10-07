import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidebar-menu',
    templateUrl: './sidebar-menu.page.html',
    styleUrls: ['./sidebar-menu.page.scss'],
})

export class SidebarMenuPage implements OnInit {

    pages = [
        {
            title: 'Inicio',
            icon:'home',
            url: '/menu/inicio'
        },
        {
            title: 'Contaminación',
            icon:'home',
            url: '/menu/contaminacion'
        },
        {
            title: 'Gas',
            icon:'home',
            url: '/menu/gas'
        },
        {
            title: 'Humedad',
            icon:'home',
            url: '/menu/humedad'
        },
        {
            title: 'Temperatura',
            icon:'home',
            url: '/menu/temperatura'
        },
        {
            title: 'Alertas',
            icon:'warning',
            url: '/menu/alerta'
        }
    ];

    selectedPath = '';

    constructor(private router: Router) {
        this.router.events.subscribe((event: RouterEvent) => {
          if (event && event.url){
            this.selectedPath=event.url;
          }
        })
    }

    ngOnInit() {
    }

}
