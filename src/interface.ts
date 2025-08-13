class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta : number) {
        this.numeroDaConta = numeroDaConta;
    }
}

class ContaSalario extends Conta {
    depositar(valor:number) {
        this.saldo += valor;
    }
}

interface ITransacional {
    transferir: (valor: number, destionatario: Conta) => Boolean;
    taxaTransferencia: number;
}

interface Exemplo2 {
    cnpj: number;
}

interface Exemplo3 extends Exemplo2 {

    telefone: number;
}

class ContaCorrente extends Conta implements ITransacional {
    transferir (valor: number, destionatario: Conta) {
        destionatario.saldo += (valor - this.taxaTransferencia) ;
        return true;
    };
    taxaTransferencia: number = 0;

}
