 abstract class Gato{
    nome: string
    cor: string

    constructor(n: string, c: string){
        this.nome = n 
        this.cor = c
    }
}

class Tom extends Gato{
    idade: number
    constructor(n: string, c: string, i: number){
        super(n, c)
        this.idade = i
    }
}

let g = new Tom("Tom", "Cinza", 5)

// AQUI USA-SE A CLASSE ABSTRATA. ELA SERVE SOMENTE PARA QUE OUTRAS CLASSES HERDEM DELA 

console.log(g.nome, g.cor, g.idade)