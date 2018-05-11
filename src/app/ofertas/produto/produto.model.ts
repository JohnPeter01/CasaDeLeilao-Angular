//Objeto modelo para o produto.
export interface Produto{
    //Atributos Obrigatórios.
    nome:string;
    valorAtual:number;
    incOmissao:number;
    maiorOferta:number;
    estado:string;
    foto:string|any;
    id:number
}