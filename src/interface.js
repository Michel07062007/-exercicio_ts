"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    numeroDaConta;
    saldo = 0;
    constructor(numeroDaConta) {
        this.numeroDaConta = numeroDaConta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrente extends Conta {
    transferir(valor, destionatario) {
        destionatario.saldo += (valor - this.taxaTransferencia);
        return true;
    }
    ;
    taxaTransferencia = 0;
}
//# sourceMappingURL=interface.js.map