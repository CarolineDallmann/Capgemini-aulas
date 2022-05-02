interface IEmployee {
    empCode: number;
    empName: string;
    getSalary(salario:number): number; // arrow function
    getManagerName(nome:string): string; 
}

interface IDao{
    salvar():boolean;
    alterar(obj:string): boolean;
    consultar():string[],
    consultarPorID(id:number): string
    deletar(id:number):void
}

export{IEmployee,IDao}