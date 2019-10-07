import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
          path: 'inicio',
          loadChildren: '../inicio/inicio.module#InicioPageModule'
      },
      {
          path: 'alerta',
          loadChildren: '../alerta/alerta.module#AlertaPageModule'
      }
    ]
  },
  {
    path:'',
    redirectTo:'tabs/inicio',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
