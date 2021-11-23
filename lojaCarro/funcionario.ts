export default class Funcionario{
    nome: string
    comissao: number = 0

    constructor(n: string, r?: number){
        this.nome = n
        this.comissao = r
    }

    public getNome(){
        return this.nome
    }
    public setNome(nome: string){
        this.nome = nome
    }
    public getComissao(){
        return this.comissao
    }
    public setComissao(comissao: number): number{
        return this.comissao = comissao;
    }
} 