import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Produtos } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class ProdutosEntity implements Produtos {
  @Exclude()
  id: number;
  nome: string;
  descricao: string;
  valor: number;
  tipo: string;
  quantidade: number;
  embalagem: string;
  @Exclude()
  loteId: number;
  @Exclude()
  movimentoEstoqueId: number | null;
}
