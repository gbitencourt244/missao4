import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditoraService } from './controle.editora'; 
import { ControleLivrosService } from './controle.livro'; 
import { Editora } from './editora'; 
import { Livro } from './livros'; 
import { Observable } from 'rxjs';
 

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {

  public livro: Livro; 
  public autoresForm: string = ''; 
  public editoras: Array<Editora> = []; 

  private servEditora: ControleEditoraService; 
  private servLivros: ControleLivrosService; 
  private router: Router; 

  
  constructor(
    servEditora: ControleEditoraService,
    servLivros: ControleLivrosService,
    router: Router
  ) {
    this.servEditora = servEditora;
    this.servLivros = servLivros;
    this.router = router;
     
  };

 
  ngOnInit(): any {
    this.servEditora.getEditoras().subscribe((editoras: Array<Editora>) => {
      this.editoras = editoras;
    });
  };

  
  incluir = (): any => {
    this.livro.autores = this.autoresForm.split('\n'); 
    this.servLivros.incluir(this.livro).subscribe(() => {
      this.router.navigateByUrl('/livros.html'); 
    });
  };
}