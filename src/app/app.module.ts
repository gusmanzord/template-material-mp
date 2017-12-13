import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LogoComponent } from './logo/logo.component';
import { AppnameComponent } from './appname/appname.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PerfilComponent,
    LogoComponent,
    AppnameComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





