interface Rato{
    nome: string
    fugir(): void
    idade?: number | string
}

class Jerry implements Rato{
    nome: string
    idade?: number | string

    constructor(n: string, i: number){
        this.nome = n
        this.idade = i
    }
    fugir(){
        console.log(`Corra, la vem o Tom!`)
    }
}

    