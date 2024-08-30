import { Injectable } from '@angular/core';
import { Editora } from './editora';  

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
   
  private editoras: Array<Editora> = [
    new Editora(1, 'Editora A Cabana'),
    new Editora(2, 'Editora Livro dos Espiritos'),
    new Editora(3, 'Editora 4 vIdas de um cachorro')
  ];

  constructor() { }

   
  getEditoras(): Array <Editora> {
    return this.editoras;
  }

   
  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora?.nome;
  }
}