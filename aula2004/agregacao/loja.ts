import { Carrinho } from "./carrinho";
import { Item } from "./item";
import { Produto } from "./produto";


let feijao: Produto;
feijao = new Produto('Feijão preto',5, 10);

let arroz = new Produto('Arroz',14.90, 25);

let it1: Item = new Item(feijao, feijao.valorUnit, 2);
let it2 = new Item(arroz, arroz.valorUnit, 3);

console.log(it1)
console.log(it2)

let c1: Carrinho;
c1 = new Carrinho('20/04/2022', 'jose')
c1.add(it1);
c1.add(it2);
console.log(c1)

c1.remove(it1);
console.log(c1)
