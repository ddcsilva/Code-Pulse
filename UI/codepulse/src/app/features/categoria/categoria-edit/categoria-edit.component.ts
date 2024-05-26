import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../models/categoria.model';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit, OnDestroy {

  id: string | null = null;
  paramsSubscription?: Subscription;
  categoria?: Categoria;

  constructor(private route: ActivatedRoute, private categoriaService: CategoriaService) { }

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
    if (this.categoria) {
      console.log(this.categoria);
    }
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }
}
