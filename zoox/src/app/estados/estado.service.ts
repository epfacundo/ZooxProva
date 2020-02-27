import { EstadoDTO} from './estadoDTO';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API_CONFIG } from '../config/api'
import { map} from 'rxjs/operators';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable()
export class EstadoService {
  api = `${ API_CONFIG.URL }/estados`;

  constructor(private http: HttpClient) {
  }

  save(entity: EstadoDTO): Observable<EstadoDTO> {
    if (entity._id) 
    {  
      return this.http.put<EstadoDTO>(this.api, entity, {headers});
    } 
    else 
    {
      return this.http.post<EstadoDTO>(this.api, entity, {headers});
    }
  }

  findById(id: string): Observable<EstadoDTO> {
    const url = `${this.api}/${id}`;
    return this.http.get<EstadoDTO>(url, {headers});
  }

  find(): Observable<EstadoDTO[]> {
    return this.http.get<EstadoDTO[]>(this.api, {headers});
  }

  delete(id): Observable<EstadoDTO> {
    
    let url = `${this.api}/${id}`;
    return this.http.delete<EstadoDTO>(url, {headers});

  }
}
