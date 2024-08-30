import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { ControleEditoraService } from './controle.editora';
import { ControleLivrosService } from './controle.livro';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ControleEditoraService,
    ControleLivrosService
  ],
  bootstrap: [AppModule]
})
export class AppModule { }