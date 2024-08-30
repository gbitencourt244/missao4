import { Observable } from 'rxjs';

export class Editora {
     
    codEditora: number;
    nome: string;


    
  
     
    constructor(codEditora: number, nome: string) {
      this.codEditora = codEditora;
      this.nome = nome;
    }
    subscribe ({ codEditora, nome }: { codEditora: number; nome: string; }): any {
      this.codEditora = codEditora;
      this.nome = nome;
    }
  }