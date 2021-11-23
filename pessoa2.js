var Person = /** @class */ (function () {
    function Person(n, i) {
        this.nome = n;
        this.idade = i;
    }
    return Person;
}());
var person = new Person("Gabriela", 35);
console.log("nome: " + person.nome + ", idade: " + person.idade);
