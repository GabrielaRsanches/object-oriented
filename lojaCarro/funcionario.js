"use strict";
exports.__esModule = true;
var Funcionario = /** @class */ (function () {
    function Funcionario(n, r) {
        this.comissao = 0;
        this.nome = n;
        this.comissao = r;
    }
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    Funcionario.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Funcionario.prototype.getComissao = function () {
        return this.comissao;
    };
    Funcionario.prototype.setComissao = function (comissao) {
        return this.comissao = comissao;
    };
    return Funcionario;
}());
exports["default"] = Funcionario;
