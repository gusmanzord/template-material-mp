import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ImportarProcessoComponent } from './importar-processo/importar-processo.component';
import { ListaProcessoComponent } from './lista-processo/lista-processo.component';
import { IntimacoesComponent } from './intimacoes/intimacoes.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ImportarProcessoComponent,
    ListaProcessoComponent,
    IntimacoesComponent
  ],

  imports: [
    RouterModule,
    MaterialModule,
  ],
 exports: [
    RouterModule,
    MaterialModule,
  ],
  providers: []
})
export class CoreModule {
}