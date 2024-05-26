import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListComponent } from './features/categoria/categoria-list/categoria-list.component';
import { CategoriaAddComponent } from './features/categoria/categoria-add/categoria-add.component';
import { CategoriaEditComponent } from './features/categoria/categoria-edit/categoria-edit.component';
import { PostListComponent } from './features/post/post-list/post-list.component';
import { PostAddComponent } from './features/post/post-add/post-add.component';

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
  },
  {
    path: 'admin/posts',
    component: PostListComponent
  },
  {
    path: 'admin/posts/adicionar',
    component: PostAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
