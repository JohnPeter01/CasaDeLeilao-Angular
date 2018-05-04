//Objeto modelo para o produto.
export interface Produto{
    //Atributos Obrigatórios.
    nome:string;
    valorBase:number;
    incOmissao:number;
    valorAtual?:number;
    oferta?:number;
    estado:string;
}