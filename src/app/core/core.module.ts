import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ImportarProcessoComponent } from './importar-processo/importar-processo.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ImportarProcessoComponent
  ],

  imports: [
    RouterModule,
  ],
 exports: [
    RouterModule,
  ],
  providers: []
})
export class CoreModule {
}