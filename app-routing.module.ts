import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivroListaComponent } from './livros';
import { ControleLivrosService } from './controle.livro';  

const routes: Routes = [
  { path: 'lista', component: LivroListaComponent },
  { path: 'dados', component: ControleLivrosService },
  { path: '', redirectTo: '/lista', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }