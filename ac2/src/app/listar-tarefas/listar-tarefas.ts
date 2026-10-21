import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TarefaService, Tarefa } from '../tarefa-service';

@Component({
  imports: [RouterLink],
  selector: 'app-listar-tarefas',
  styleUrl: './listar-tarefas.css',
  templateUrl: './listar-tarefas.html',
})
export class ListarTarefas {
  tarefas: Tarefa[];

  constructor(private service: TarefaService) {
    this.tarefas = this.service.listar();
  }

  remover(t: Tarefa) {
    this.service.remover(t);
  }

  concluir(t: Tarefa) {
    this.service.marcarConcluida(t);
  }

  total() {
    return this.tarefas.filter(t => !t.removida).length;
  }

  concluidas() {
    return this.tarefas.filter(t => t.concluida && !t.removida).length;
  }

  pendentes() {
    return this.tarefas.filter(t => !t.concluida && !t.removida).length;
  }
}
