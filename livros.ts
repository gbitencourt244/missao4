import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from './controle.editora';
import { ControleLivrosService } from './controle.livro';
import { Editora } from './editora';  
import { Observable } from 'rxjs';





@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  livros: string[];

  constructor() {
     
    this.livros = ['Livro 1', 'Livro 2', 'Livro 3'];
  }

  ngOnInit(): any {
     
  }
}


export class Livro {
     
    codigo: number;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
  
     
    constructor(
      codigo: number,
      codEditora: number,
      titulo: string,
      resumo: string,
      autores: string[]
    ) {
      this.codigo = codigo;
      this.codEditora = codEditora;
      this.titulo = titulo;
      this.resumo = resumo;
      this.autores = autores;
    }
  }