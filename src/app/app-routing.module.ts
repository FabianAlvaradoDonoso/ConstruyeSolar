import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'temperatura', loadChildren: './temperatura/temperatura.module#TemperaturaPageModule' },
  // { path: 'humedad', loadChildren: './humedad/humedad.module#HumedadPageModule' },
  // { path: 'alertas', loadChildren: './alertas/alertas.module#AlertasPageModule' },
  { path: '', loadChildren: './pages/sidebar-menu/sidebar-menu.module#SidebarMenuPageModule' },
  // { path: 'contaminacion', loadChildren: './pages/contaminacion/contaminacion.module#ContaminacionPageModule' }
  // { path: 'menu', loadChildren: './components/menu/menu.component#MenuPageModule' },
  // { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
