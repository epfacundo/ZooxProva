import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CidadeCriarComponent } from './criar/criar.component';
import { ListarCidadesComponent } from './listar/listar.component';
import { CidadeService } from './cidade.services';
import { CIDADE_ROUTES } from './cidade.routes';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    RouterModule.forChild(CIDADE_ROUTES)
  ],
  declarations: [
    ListarCidadesComponent,
    CidadeCriarComponent
  ],
  providers: [CidadeService],
  exports: [ReactiveFormsModule]
})
export class CidadeModule { }
