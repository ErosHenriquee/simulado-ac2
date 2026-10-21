import { Injectable } from '@angular/core';

export interface Tarefa {
    id: number;
    titulo: string;
    prazo: string;
    concluida: boolean;
    removida: boolean;
}

@Injectable({ providedIn: 'root' })
export class TarefaService {
    private tarefas: Tarefa [] = [];
    private proximoId = 1;

    listar(): Tarefa[] {
        return this.tarefas;
    }

    adicionar(titulo: string, prazo: string) {
        this.tarefas.push({
            id: this.proximoId,
            titulo: titulo,
            prazo: prazo,
            concluida: false,
            removida: false,
        });
        this.proximoId++;
    }

    remover(tarefa: Tarefa) {
        tarefa.removida = true;
    }

    prazoConclusao(tarefa: Tarefa, novoPrazo: string) {
        tarefa.prazo = novoPrazo;
    }

    marcarConcluida(tarefa: Tarefa) {
        tarefa.concluida = true;
    }
}
