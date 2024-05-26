import { Injectable } from '@angular/core';
import { CriarCategoriaRequest } from '../models/criar-categoria-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  obterTodasCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${environment.urlApi}/api/Categorias`);
  }

  adicionarCategoria(model: CriarCategoriaRequest): Observable<void> {
    return this.http.post<void>(`${environment.urlApi}/api/Categorias`, model);
  }
}
