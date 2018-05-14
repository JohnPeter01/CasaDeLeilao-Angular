//Objeto modelo para o produto.
export interface Produto{
    //Atributos Obrigatórios.
    id:number
    nome:string;
    valorAtual:number;
    incOmissao:number;
    maiorOferta:number;
    estado:string;
    foto:string|any;
}