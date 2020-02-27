import { Cidade } from './cidade';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API_CONFIG } from '../config/api'

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable()
export class CidadeService {
  api = `${ API_CONFIG.URL }/cidades`;

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Cidade> {
    const url = `${this.api}/${id}`;
    return this.http.get<Cidade>(url, {headers});
  }


  adicionar(nome, estado) {
    const objCidade = {
      nome,
      estado
    };
    console.log(objCidade);

    // ==> (POST - URL no Back-End:): http://localhost:8000/api/funcionarios
    // this
    //   .http
    //   .post(`${this.uri}/funcionarios`, objFuncionario)
    //   .subscribe(res => console.log('Feito'));
  }



  find(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.api, {headers});
  }

  save(entity: Cidade): Observable<Cidade> {
    if (entity._id) {
      return this.http.put<Cidade>(this.api, entity, {headers});
    } else {
      return this.http.post<Cidade>(this.api, entity, {headers});
    }
  }

  delete(id): Observable<Cidade> {
    let url = `${this.api}/${id}`;
      return this.http.delete<Cidade>(url, {headers});
  }
}

