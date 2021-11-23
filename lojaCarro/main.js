"use strict";
exports.__esModule = true;
var carro_1 = require("./carro");
var cliente_1 = require("./cliente");
var compraCarro_1 = require("./compraCarro");
var funcionario_1 = require("./funcionario");
var car = new carro_1["default"]("Logan", 1999, 10000);
var cliente = new cliente_1["default"]("Diego", 4999);
var funcionario = new funcionario_1["default"]("Joao");
var compra = new compraCarro_1["default"](cliente, funcionario, car);
compra.detalharCompra();