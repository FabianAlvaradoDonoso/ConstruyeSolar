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
            title: 'Contaminación',
            icon:'list',
            url: '/contaminacion'
        },
        {
            title: 'Gas',
            icon:'pie',
            url: '/gas'
        },
        {
            title: 'Humedad',
            icon:'water',
            url: '/humedad'
        },
        {
            title: 'Temperatura',
            icon:'home',
            url: '/temperatura'
        },
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
