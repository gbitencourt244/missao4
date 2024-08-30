import { Injectable } from '@angular/core';
import { Livro } from './livros';
import { Editora } from './editora';   
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  
  private livros: Array<Livro> = [
    new Livro(1, 1, 'Livro A Cabana', 'Resumo do Livro ', ['Autor 1']),
    new Livro(2, 1, 'Livro Dos Espiritos', 'Resumo do Livro ', ['Autor 2']),
    new Livro(3, 2, 'Livro 4 vidas de um cachorro', 'Resumo do Livro ', ['Autor 3'])
  ];
  Editora: any;

  constructor() { }

   
  obterLivros(): Array<Livro> {
    return this.livros;
  }

  
  incluir(livro: Livro): any {
     
    const maxCodigo = this.livros.reduce((max, livroAtual) => Math.max(max, livroAtual.codigo), 0);
    livro.codigo = maxCodigo + 1;

     
    this.livros.push(livro);
  }

  obterNome = (codEditora: number): string => {
    let nomeEditora = '';
    this.Editora.getNomeEditora(codEditora).subscribe(nome => {
      nomeEditora = nome;
    });
    return nomeEditora;
  }

   
  excluir(codigo: number): any {
     
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    
    if (index !== -1) {
       
      this.livros.splice(index, 1);
    }
  }
}