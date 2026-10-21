import { Routes } from '@angular/router';
import { CadastrarTarefa } from './cadastrar-tarefa/cadastrar-tarefa';
import { ListarTarefas } from './listar-tarefas/listar-tarefas';

export const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
  { path: 'cadastro', component: CadastrarTarefa },
  { path: 'lista', component: ListarTarefas },
];
