import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EstadoService } from '../estado.service';
import { EstadoDTO } from '../EstadoDTO';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-estado',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class EstadoCriarComponent implements OnInit {

  id: string;
  estado: EstadoDTO;
  feedback: any = {};
  adicionarEstadoForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router, private estadoService: EstadoService) {
    this.createForm();
  }

  createForm() {
    this.adicionarEstadoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      abreviacao: ['', Validators.required]
      });
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new' || id===undefined) { return of(new EstadoDTO()); }
          return this.estadoService.findById(id);
        })
      )
      .subscribe(estado => {            
          this.estado = estado;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erro ao carregar'};
        }
      );
  }


  adicionarEstado() {

    this.estadoService.save(this.estado).subscribe(
      estado => {
        this.estado = estado;
        this.feedback = {type: 'success', message: 'Salvo com sucesso!'};
        setTimeout(() => {
          this.router.navigate(['/estados']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Erro ao salvar'};
      }
    );
    this.adicionarEstadoForm.reset();
  }

  

  cancel() {
    this.router.navigate(['/estados']);
  }

}
