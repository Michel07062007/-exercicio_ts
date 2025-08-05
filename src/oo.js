"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    renda;
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
class ContaBancaria {
    saldo = 0;
    numeroConta;
    constructor(numeroDaConta) {
        this.numeroConta = numeroDaConta;
    }
    static retornaNumeroDoBanco() {
        return 124;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(1231451);
ContaBancaria.retornaNumeroDoBanco;
//# sourceMappingURL=oo.js.map