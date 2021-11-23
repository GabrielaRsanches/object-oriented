export default class Animal{
    tipo: string
    nome: string
    idade: number

    constructor(t: string, n:string, i:number){
        this.tipo = t
        this.nome = n
        this.idade = i
    }
}

class Cachorro extends Animal{
    raça: string

    constructor(t: string, n: string, i:number, r: string){
        super(t, n, i,)
        this.raça = r
        
    }
}

class Humano extends Animal{
    cor: string
    
    constructor(t: string, n: string, i:number, c: string){
        super(t, n, i,)
        this.cor = c
    }
}

let c1 = new Cachorro("cachorro", "bob", 2, "poodle")

let h1 = new Humano("humano", "gabriela", 25, "parda")

