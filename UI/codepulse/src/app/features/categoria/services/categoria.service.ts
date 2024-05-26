import { Injectable } from '@angular/core';
import { CriarCategoriaRequest } from '../models/criar-categoria-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria.model';
import { environment } from 'src/environments/environment';
import { AtualizarCategoriaRequest } from '../models/atualizar-categoria-request.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  obterTodasCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${environment.urlApi}/api/Categorias`);
  }

  obterCategoriaPorId(id: string): Observable<Categoria> {
    return this.http.get<Categoria>(`${environment.urlApi}/api/Categorias/${id}`);
  }

  adicionarCategoria(request: CriarCategoriaRequest): Observable<void> {
    return this.http.post<void>(`${environment.urlApi}/api/Categorias`, request);
  }

  atualizarCategoria(id: string, request: AtualizarCategoriaRequest): Observable<Categoria> {
    return this.http.put<Categoria>(`${environment.urlApi}/api/Categorias/${id}`, request);
  }
}
