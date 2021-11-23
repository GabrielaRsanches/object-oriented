class Person{
    constructor(n: string, i:number){
        this.nome = n
        this.idade = i
    }

    nome: string
    idade: number
}

let person = new Person("Gabriela", 35)

console.log(`nome: ${person.nome}, idade: ${person.idade}`)
