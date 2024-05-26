import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListComponent } from './features/categoria/categoria-list/categoria-list.component';
import { CategoriaAddComponent } from './features/categoria/categoria-add/categoria-add.component';
import { CategoriaEditComponent } from './features/categoria/categoria-edit/categoria-edit.component';

const routes: Routes = [
  {
    path: 'admin/categorias',
    component: CategoriaListComponent
  },
  {
    path: 'admin/categorias/adicionar',
    component: CategoriaAddComponent
  },
  {
    path: 'admin/categorias/editar/:id',
    component: CategoriaEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
