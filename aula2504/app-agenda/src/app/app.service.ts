import { Injectable } from '@angular/core';
import { Contato } from './entities/contato.entity';

@Injectable()
export class AppService {

    salvar(contato: Contato) {
        return fetch('http://localhost:3000/contatos', {
            method: 'POST',
            body: JSON.stringify(contato),
            headers: {
                "Content-Type": "Application/json"
            }
        })

    }

    async consultaTodos():Promise<Contato[]> {
        const x = await fetch('http://localhost:3000/contatos');
        return await x.json();
    }
}