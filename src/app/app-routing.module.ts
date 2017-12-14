import { NgModule } from '@angular/core';

import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'orgaos', loadChildren: './core/importar-processo/importar-processo.component'},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    // The preloading configuration will load all the lazy loading modules after
    // the user access the main page. This configurations continue loading in a
    // different javascript file (in the browser's client) and when the lazy
    // load modules to be access (with de URL), the lazy load module has been loaded,
    // avoiding the user to wait a download to chuck.js
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}