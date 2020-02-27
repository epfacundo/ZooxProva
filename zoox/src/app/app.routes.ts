import {ExtraOptions, Routes, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EstadoCriarComponent} from './estados/criar/criar.component';
import {CidadeCriarComponent} from './cidades/criar/criar.component';
import { ListarCidadesComponent } from './cidades/listar/listar.component';
import { ListarEstadoComponent } from './estados/listar/listar.component';
export const APP_ROUTES: Routes = [

  {
    path: 'cidades',
    component: ListarCidadesComponent
  },
  {
    path: 'estados',
    component: ListarEstadoComponent
  },
    {
    path: 'estados/:id',
    component: EstadoCriarComponent
  },
  {
    path: 'cidades/:id',
    component: CidadeCriarComponent
  }
]

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
}
