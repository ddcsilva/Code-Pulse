import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../models/categoria.model';
import { AtualizarCategoriaRequest } from '../models/atualizar-categoria-request.model';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit, OnDestroy {

  id: string | null = null;
  paramsSubscription?: Subscription;
  atualizarCategoriaSubscription?: Subscription;
  categoria?: Categoria;

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        if (this.id) {
          this.categoriaService.obterCategoriaPorId(this.id).subscribe({
            next: (response) => {
              this.categoria = response;
            }
          });
        }
      }
    });
  }

  editarCategoria(): void {
    const atualizarCategoriaRequest: AtualizarCategoriaRequest = {
      nome: this.categoria?.nome || '',
      slug: this.categoria?.slug || ''
    };

    if (this.id) {
      this.atualizarCategoriaSubscription = this.categoriaService.atualizarCategoria(this.id, atualizarCategoriaRequest).subscribe({
        next: (response) => {
          this.router.navigate(['/admin/categorias']);
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.atualizarCategoriaSubscription?.unsubscribe();
  }
}
