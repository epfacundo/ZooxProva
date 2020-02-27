import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EstadoCriarComponent} from './estados/criar/criar.component';
import {CidadeCriarComponent} from './cidades/criar/criar.component';

const routes: Routes = [
  {
    path: 'estados',
    component: EstadoCriarComponent
  },
  {
    path: 'cidades',
    component: CidadeCriarComponent
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path: '**',
  //   redirectTo: 'home'
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
