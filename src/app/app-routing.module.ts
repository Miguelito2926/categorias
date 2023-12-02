import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaNovaComponent } from './categoria-nova/categoria-nova.component';
import { CategoriaEditarComponent } from './categoria-editar/categoria-editar.component';
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path:'categorias',
    component:CategoriasComponent,
    data:{title: 'Categorias'}
},
{
    path:'categoria-nova',
    component:CategoriaNovaComponent,
    data:{title: 'Nova Categoria'}
},
{
    path:'categoria-detalhe/:id',
    component:CategoriaDetalheComponent,
    data:{title: 'Detalhes da Categoria'}
},
{
    path:'categoria-editar/:id',
    component:CategoriaEditarComponent,
    data:{title: 'Edita a Categoria'}
},
{
    path:'login',
    component:LoginComponent,
    data:{title: 'Login'}
},
{
    path:'logout',
    component:LogoutComponent,
    data:{title: 'Logout'}
},
{ path: '',
redirectTo: '/categorias',
pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
