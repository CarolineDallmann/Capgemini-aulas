import { IDao, IEmployee } from "./interfaces";

class Empregado implements IEmployee, IDao {
    empCode: number;
    empName: string;
    empFone: string;
    constructor(empCode: number, empName: string, empFone: string) {
        this.empCode = empCode;
        this.empName = empName;
        this.empFone = empFone;
    }
    salvar(): boolean {
        return true;
    }
    alterar(obj: string): boolean {
        return true;
    }
    consultar(): string[] {
        let x: string[] = [];
        return x;
    }
    consultarPorID(id: number): string {
        return 'maria';
    }
    deletar(id: number): void {
        
    }
    getSalary(salario: number): number {
        return salario
    }
    getManagerName(nome: string): string {
        return nome
    }
}