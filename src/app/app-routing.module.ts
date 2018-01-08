import { NgModule } from '@angular/core';

import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { ImportarProcessoComponent } from './core/importar-processo/importar-processo.component';
import { ListaProcessoComponent } from './core/lista-processo/lista-processo.component';
import { IntimacoesComponent } from './core/intimacoes/intimacoes.component';
import { ProcessoComponent } from './core/processo/processo.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'importar-processo', component: ImportarProcessoComponent},
  { path: 'lista-processo', component: ListaProcessoComponent},
  { path: 'intimacoes', component: IntimacoesComponent},
  { path: 'processo', component: ProcessoComponent},
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


