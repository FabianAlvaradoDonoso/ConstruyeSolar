import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
          {
          path: '',
          children: [
            {
              path: '',
              loadChildren: () =>
                import('../pages/sidebar-menu/sidebar-menu.module').then(m => m.SidebarMenuPageModule)
            }
          ]
      },
      {
          path: 'humedad',
          children: [
            {
              path: '',
              loadChildren: () =>
                import('../humedad/humedad.module').then(m => m.HumedadPageModule)
            }
          ]
      },
      {
          path: 'alertas',
          children: [
            {
              path: '',
              loadChildren: () =>
                import('../alertas/alertas.module').then(m => m.AlertasPageModule)
            }
          ]
      },
      {
          path: 'temperatura',
          children: [
            {
              path: '',
              loadChildren: () =>
                import('../temperatura/temperatura.module').then(m => m.TemperaturaPageModule)
            }
          ]
      },
      {
        path: '',
        redirectTo: '../pages/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '../pages/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
