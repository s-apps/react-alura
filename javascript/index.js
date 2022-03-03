class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0;    

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
        }
    }

    depositar(valor) {
        if(valor > 0) {
            this._saldo += valor;
        }
    }
}

const cliente1 = new ContaCorrente();
cliente1.depositar(100);
cliente1.sacar(50);
console.log(cliente1);