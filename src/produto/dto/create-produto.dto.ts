import { Produtos } from "@prisma/client";

export class CreateProdutoDto implements Produtos{
    id: number;
    nome: string;
    descricao: string;
    valor: number;
    tipo: string;
    quantidade: number;
    embalagem: string;
    loteId: number;
    movimentoEstoqueId: number | null;
}
