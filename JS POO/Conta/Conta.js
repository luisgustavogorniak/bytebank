//Classe abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois esta é uma classe abstrata")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        
        if(novoValor instanceof Cliente){
                this._cliente = novoValor;
        }
        
    }

    get cliente(){
        return this._cliente;
    }
     
    // #saldo = 0 - private field can't be shown on code output - https://github.com/tc39/proposal-class-fields#private-fields

    get saldo(){
        return this._saldo;
    }

    //abstract method
    sacar(valor){
        throw new Error ("O método Sacar da Conta é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        this._saldo += valor; 
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado); 
    }
}
