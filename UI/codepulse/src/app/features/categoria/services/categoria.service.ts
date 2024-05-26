import { Injectable } from '@angular/core';
import { CriarCategoriaRequest } from '../models/criar-categoria-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  obterTodasCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('https://localhost:7293/api/Categorias');
  }

  adicionarCategoria(model: CriarCategoriaRequest): Observable<void> {
    return this.http.post<void>('https://localhost:7293/api/Categorias', model);
  }
}
