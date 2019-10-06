import { Component, OnInit } from '@angular/core';
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
            url: '/menu/inicio'
        },
        {
            title: 'Contaminación',
            url: '/menu/contaminacion'
        },
        {
            title: 'Gas',
            url: '/menu/gas'
        },
        {
            title: 'Humedad',
            url: '/menu/humedad'
        },
        {
            title: 'Temperatura',
            url: '/menu/temperatura'
        },
        {
            title: 'Alertas',
            url: '/menu/alerta'
        }
    ];

    selectedPath = '';

    constructor(private router: Router) {
        // this.router.events.subscribe((event: RouterEvent) => {
        //   this.selectedPath=event.url;
        // });
    }

    ngOnInit() {
    }

}
