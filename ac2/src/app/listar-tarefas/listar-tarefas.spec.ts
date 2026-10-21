import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarTarefas } from './listar-tarefas';

describe('ListarTarefas', () => {
  let component: ListarTarefas;
  let fixture: ComponentFixture<ListarTarefas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTarefas],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarTarefas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
