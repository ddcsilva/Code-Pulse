import { Component } from '@angular/core';
import { CriarCategoriaRequest } from '../models/criar-categoria-request.model';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-categoria-add',
  templateUrl: './categoria-add.component.html',
  styleUrls: ['./categoria-add.component.css']
})
export class CategoriaAddComponent {
  model: CriarCategoriaRequest;

  constructor(private categoriaService: CategoriaService) {
    this.model = {
      nome: 'Danilo',
      slug: ''
    }
  }

  adicionarCategoria() {
    this.categoriaService.adicionarCategoria(this.model).subscribe({
      next: () => {
        console.log('Categoria adicionada com sucesso');
      },
      error: () => {
        console.error('Erro ao adicionar categoria');
      }
    });
  }
}
