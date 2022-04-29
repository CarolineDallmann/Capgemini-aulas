import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComponent } from './cadastro.component';

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

;

  it('produto tem que ter descricao', () => {
    component.produto.id = 1
    component.produto.descricao = 'feijao'
    expect(component.produto.id).toBeTruthy();
    expect(component.produto.descricao).toBeTruthy();
  });

  it('descricao minima', () => {
    component.descricao = 'peixe'
    expect(component.descricao.length).toBeGreaterThanOrEqual(5)
  });
});
