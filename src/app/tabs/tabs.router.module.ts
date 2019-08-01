import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
          path: 'home',
          children: [
            {
              path: '',
              loadChildren: () =>
                import('../home/home.module').then(m => m.HomePageModule)
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
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
