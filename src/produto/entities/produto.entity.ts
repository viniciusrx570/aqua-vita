import { Produtos } from "@prisma/client";

export class ProdutosEntity implements Produtos {
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
