import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListComponent } from './features/categoria/categoria-list/categoria-list.component';

const routes: Routes = [
  {
    path: 'admin/categorias',
    component: CategoriaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
