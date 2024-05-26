import { Component } from '@angular/core';
import { CriarCategoriaRequest } from '../models/criar-categoria-request.model';

@Component({
  selector: 'app-categoria-add',
  templateUrl: './categoria-add.component.html',
  styleUrls: ['./categoria-add.component.css']
})
export class CategoriaAddComponent {
  model: CriarCategoriaRequest;

  constructor() {
    this.model = {
      nome: 'Danilo',
      slug: ''
    }
  }

  adicionarCategoria() {
    console.log(this.model);
  }
}
