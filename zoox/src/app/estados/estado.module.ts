import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EstadoCriarComponent } from './criar/criar.component';
import { ListarEstadoComponent } from './listar/listar.component';
import { EstadoService } from './estado.service';
import { ESTADO_ROUTES } from './estado.routes';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    RouterModule.forChild(ESTADO_ROUTES)
  ],
  declarations: [
    EstadoCriarComponent,
    ListarEstadoComponent,
  ],
  providers: [EstadoService],
  exports: [ReactiveFormsModule]
})
export class EstadoModule { }
