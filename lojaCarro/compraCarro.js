"use strict";
exports.__esModule = true;
var CompraCarro = /** @class */ (function () {
    function CompraCarro(cli, fun, car) {
        this.valorDesconto = 0;
        this.cliente = cli;
        this.funcionario = fun;
        this.carro = car;
        this.carro.setValor(this.darDesconto(this.carro.getValor()));
        this.precoFinal = this.carro.getValor();
        this.funcionario.setComissao(this.addComissao(this.precoFinal));
        this.valorDesconto = 0;
    }
    CompraCarro.prototype.darDesconto = function (preco) {
        if (this.carro.getAno() < 2000) {
            return this.valorDesconto = this.carro.getValor();
        }
        else {
            this.carro.setValor(preco);
        }
        if (this.cliente.getRenda() < 5000) {
            this.valorDesconto = this.carro.getValor() * 0.90;
            this.carro.setValor(this.valorDesconto);
        }
        else {
            this.carro.setValor(this.carro.getValor());
        }
    };
    CompraCarro.prototype.addComissao = function (valor) {
        return this.funcionario.setComissao(valor * 0.02);
    };
    CompraCarro.prototype.detalharCompra = function () {
        console.log("Nome: " + this.cliente.getNome() + "\n Carro: " + this.carro.modelo + "\n Ano: " + this.carro.getAno() + "\n Valor: " + this.carro.getValor() + " \n Funcionario: " + this.funcionario.getNome() + ", Comissao: " + this.funcionario.getComissao());
    };
    return CompraCarro;
}());
exports["default"] = CompraCarro;
