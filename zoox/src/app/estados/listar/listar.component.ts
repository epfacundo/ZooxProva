import { Component, OnInit, ViewChild } from '@angular/core';
import { EstadoService } from '../estado.service';
import { EstadoDTO } from '../estadoDTO';
import { DatatableComponent } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarEstadoComponent implements OnInit {
 
  feedback: any = {};
 
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  estadoList : EstadoDTO[] = [];
  temp = [];

  constructor(private estadoService: EstadoService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {

    this.estadoService.find().subscribe(result => {
       
        this.estadoList = result;
        this.temp = [...this.estadoList];
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  filtrar(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function(d) {
      return d.nome.toLowerCase().indexOf(val) !== -1 || d.abreviacao.toLowerCase().indexOf(val) !== -1 || !val ;
    });
    this.estadoList = temp;
    this.table.offset = 0;
  }
  delete(id): void {
    console.log(id);
    if (confirm('Tem certeza que deseja excluir?')) {
      this.estadoService.delete(id).subscribe(() => {
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
