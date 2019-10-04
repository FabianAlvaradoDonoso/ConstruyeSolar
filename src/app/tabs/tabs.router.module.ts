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
        path: '',
        redirectTo: '/menu/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
