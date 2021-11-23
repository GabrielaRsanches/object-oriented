"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    function Cliente(n, r) {
        this.nome = n;
        this.renda = r;
    }
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Cliente.prototype.getRenda = function () {
        return this.renda;
    };
    Cliente.prototype.setRenda = function (renda) {
        this.renda = renda;
    };
    return Cliente;
}());
exports["default"] = Cliente;
