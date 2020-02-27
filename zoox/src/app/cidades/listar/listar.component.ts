import { Component, OnInit, ViewChild } from '@angular/core';
import { CidadeService } from '../cidade.services';
import { Cidade } from '../cidade';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-cidades',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarCidadesComponent implements OnInit {

  feedback: any = {};

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  cidadeList : Cidade[] = [];
  temp = [];

  constructor(private cidadeService: CidadeService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.cidadeService.find().subscribe(result => {
        this.cidadeList = result;
        this.temp = [...this.cidadeList];
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  filtrar(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function(d) {
      return d.nome.toLowerCase().indexOf(val) !== -1 || d.estadoId.nome.toLowerCase().indexOf(val) !== -1  || d.estadoId.abreviacao.toLowerCase().indexOf(val) !== -1 || !val ;
    });
    this.cidadeList = temp;
    this.table.offset = 0;
  }


  delete(id): void {
    if (confirm('Tem certeza que deseja excluir?')) {
      this.cidadeService.delete(id).subscribe(() => {
          this.feedback = {type: 'success', message: 'Exclusão realizada com sucesso!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erro ao excluir.'};
        }
      );
    }
  }
}
