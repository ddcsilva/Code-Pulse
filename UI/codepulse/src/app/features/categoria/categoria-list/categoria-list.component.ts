import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../models/categoria.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
  categorias$?: Observable<Categoria[]>;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categorias$ = this.categoriaService.obterTodasCategorias();
  }
}
