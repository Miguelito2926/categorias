import { NgModule} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaNovaComponent } from './categoria-nova/categoria-nova.component';
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import { CategoriaEditarComponent } from './categoria-editar/categoria-editar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatTableModule, } from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    CategoriasComponent,
    CategoriaNovaComponent,
    CategoriaDetalheComponent,
    CategoriaEditarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    MatFormFieldModule,
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule,
        
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function NgModuleSchemas(arg0: { declarations: (typeof LoginComponent | typeof LogoutComponent)[]; imports: (typeof BrowserModule | typeof AppRoutingModule)[]; providers: import("@angular/core").EnvironmentProviders[]; bootstrap: (typeof AppComponent)[]; }): (target: typeof AppModule) => void | typeof AppModule {
  throw new Error('Function not implemented.');
}

