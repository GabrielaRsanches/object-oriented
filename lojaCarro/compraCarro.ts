import Carro from "./carro";
import Cliente from "./cliente";
import Funcionario from "./funcionario";

export default class CompraCarro{
    cliente: Cliente
    funcionario: Funcionario
    carro: Carro
    precoFinal: number 
    valorDesconto: number = 0

    constructor(cli: Cliente, fun: Funcionario, car: Carro){
        this.cliente = cli
        this.funcionario = fun
        this.carro = car
        this.carro.setValor(this.darDesconto(this.carro.getValor()))
        this.precoFinal = this.carro.getValor()
        this.funcionario.setComissao(this.addComissao(this.precoFinal))
        this.valorDesconto = 0
    }

    private darDesconto(preco: number): number{
        if(this.carro.getAno()< 2000){
            return this.valorDesconto = this.carro.getValor()
        } else{
            this.carro.setValor(preco)
        }
        if ( this.cliente.getRenda()<5000){
            this.valorDesconto = this.carro.getValor() *0.90
            this.carro.setValor(this.valorDesconto)
        }
        else{
             this.carro.setValor(this.carro.getValor())
        }
    }

    public addComissao(valor: number): number{
        return this.funcionario.setComissao(valor * 0.02)
    }

    public detalharCompra(){
        console.log(`Nome: ${this.cliente.getNome()}\n Carro: ${this.carro.modelo}\n Ano: ${this.carro.getAno()}\n Valor: ${this.carro.getValor()} \n Funcionario: ${this.funcionario.getNome()}, Comissao: ${this.funcionario.getComissao()}`)
    }
}