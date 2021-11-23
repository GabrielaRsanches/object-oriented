var Jerry = /** @class */ (function () {
    function Jerry(n, i) {
        this.nome = n;
        this.idade = i;
    }
    Jerry.prototype.fugir = function () {
        console.log("Corra, la vem o Tom!");
    };
    return Jerry;
}());
