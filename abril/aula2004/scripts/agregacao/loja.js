"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carrinho_1 = require("./carrinho");
const item_1 = require("./item");
const produto_1 = require("./produto");
let feijao;
feijao = new produto_1.Produto('Feijão preto', 5, 10);
let arroz = new produto_1.Produto('Arroz', 14.90, 25);
let it1 = new item_1.Item(feijao, feijao.valorUnit, 2);
let it2 = new item_1.Item(arroz, arroz.valorUnit, 3);
console.log(it1);
console.log(it2);
let c1;
c1 = new carrinho_1.Carrinho('20/04/2022', 'jose');
c1.add(it1);
c1.add(it2);
console.log(c1);
c1.remove(it1);
console.log(c1);
