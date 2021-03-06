import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import {PageEvent} from '@angular/material';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ImportarProcessoComponent } from './importar-processo/importar-processo.component';
import { ListaProcessoComponent } from './lista-processo/lista-processo.component';
import { IntimacoesComponent } from './intimacoes/intimacoes.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { ProcessoComponent } from './processo/processo.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ImportarProcessoComponent,
    ListaProcessoComponent,
    IntimacoesComponent,
    TreeviewComponent,
    ProcessoComponent,
  ],

  imports: [
    RouterModule,
    MaterialModule,
    ChartsModule,
  ],
 exports: [
    RouterModule,
    MaterialModule,
  ],
  providers: []
})
export class CoreModule {
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}