import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  save(data: any){
    let url = 'http://localhost:3000/contatos'
    return this.http.post(url, data)
  }

  getAll(){
    let url = 'http://localhost:3000/contatos'
    return this.http.get(url)
  }
}
