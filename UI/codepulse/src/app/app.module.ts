import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CategoriaListComponent } from './features/categoria/categoria-list/categoria-list.component';
import { CategoriaAddComponent } from './features/categoria/categoria-add/categoria-add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaEditComponent } from './features/categoria/categoria-edit/categoria-edit.component';
import { PostListComponent } from './features/post/post-list/post-list.component';
import { PostAddComponent } from './features/post/post-add/post-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriaListComponent,
    CategoriaAddComponent,
    CategoriaEditComponent,
    PostListComponent,
    PostAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
