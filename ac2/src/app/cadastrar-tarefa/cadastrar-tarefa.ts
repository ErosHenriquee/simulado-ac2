import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TarefaService } from '../tarefa-service';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-cadastrar-tarefa',
  styleUrl: './cadastrar-tarefa.css',
  templateUrl: './cadastrar-tarefa.html',
})

export class CadastrarTarefa {
  titulo = '';
  prazo = '';

  
  constructor(private service: TarefaService) {}

  cadastrar() {
    if (this.titulo == '') {
      return;
    }
    this.service.adicionar(this.titulo, this.prazo);
    this.titulo = '';
    this.prazo = '';
  }
}

