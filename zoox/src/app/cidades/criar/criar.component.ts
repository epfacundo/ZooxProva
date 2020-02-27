import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CidadeService } from '../cidade.services';
import { Cidade } from '../cidade';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EstadoDTO } from '../../estados/estadoDTO';
import { EstadoService } from '../../estados/estado.service';
@Component({
  selector: 'app-criar-cidade',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CidadeCriarComponent implements OnInit {

  id: string;
  cidade: Cidade;
  feedback: any = {};
  adicionarCidadeForm: FormGroup;
  estados: EstadoDTO[] = [];

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private cidadeService: CidadeService, private estadoService: EstadoService) {
    this.createForm();
  }


  createForm() {
    this.adicionarCidadeForm = this.formBuilder.group({
      nome: ['', Validators.required],
      abreviacao: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new' || id === undefined) { return of(new Cidade()); }
          return this.cidadeService.findById(id);
        })
      )
      .subscribe(cidade => {
        this.cidade = cidade;
        this.feedback = {};
      },
        err => {
          this.feedback = { type: 'warning', message: 'Erro ao carregar' };
        }
      );
    this.estadoService.find().subscribe(result => {
      result.sort((a, b) => {
        return a < b ? -1 : 1;
      });
      this.estados = result;
    },
      err => {
        console.error(err);
      }
    );
  }

  adicionarCidade() {
    this.cidadeService.save(this.cidade).subscribe(
      cidade => {
        this.cidade = cidade;
        this.feedback = { type: 'success', message: 'Salvo com sucesso!' };
        setTimeout(() => {
          this.router.navigate(['/cidades']);
        }, 1000);
      },
      err => {
        console.log(err);
        this.feedback = { type: 'warning', message: 'Erro ao salvar' + err };
      }
    );
    this.router.navigate(['/cidades']);
  }

  cancel() {
    this.router.navigate(['/cidades']);
  }
}