"use strict";
function soma(n1, n2) {
    if (valida(n1, n2))
        return n1 + n2;
}
function subtracao(n1, n2) {
    if (valida(n1, n2))
        return n1 - n2;
}
function multiplicacao(n1, n2) {
    if (valida(n1, n2))
        return n1 * n2;
}
function divisao(n1, n2) {
    try {
        if (valida(n1, n2))
            if (n2 === 0)
                throw "Não é possível dividir por zero";
    }
    catch (error) {
        return error;
    }
    return n1 / n2;
}
function valida(val1, val2) {
    try {
        if (val1 === undefined || val2 === undefined) {
            throw "É necessário informar 2 valores";
        }
    }
    catch (error) {
        return error;
    }
    return true;
}
