import { Component } from '@angular/core';
import { CriarPost } from '../models/criar-post.model';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent {

  model: CriarPost;

  constructor() {
    this.model = {
      titulo: '',
      descricaoCurta: '',
      conteudo: '',
      urlImagemDestaque: '',
      slug: '',
      dataPublicacao: new Date(),
      autor: '',
      ehVisivel: true
    };
  }

  adicionarPost(): void {
    console.log(this.model);
  }

  onDateChange(event: any): void {
    this.model.dataPublicacao = new Date(event.target.value);
  }
}
