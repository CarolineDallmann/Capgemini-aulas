interface IDaoGenerica<T> {
    salvar(): boolean;
    excluir(id: number): boolean;
    consultarTodos(): T[];
    consultarID(id: number): T;
    alterar(obj: T): boolean;
}

export { IDaoGenerica }