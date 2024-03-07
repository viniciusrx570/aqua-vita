import { Produtos } from '@prisma/client';
import { ProdutosEntity } from '../entities/produto.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProdutoDto {

  @ApiProperty({
    description: 'Nome do produto',
  })
  nome: string;
  @ApiPropertyOptional({
    description: 'Descrição do produto',
    default: '',
  })
  descricao: string;
  @ApiProperty({
    description: 'Valor do produto',
    minimum: 0.0,
    default: 0.0,
  })
  valor: number;

  @ApiProperty({
    description: 'Tipo do produto do produto',
    default: 'com Gás',
    enum: ['com Gás', 'sem Gás'],
  })
  tipo: string;
  @ApiProperty({
    description: 'Quantidade',
    minimum: 0.0,
    default: 0.0,
  })
  quantidade: number;
  @ApiPropertyOptional({
    description: 'Tipo de embalagem',
    default: 'Galão',
    enum: ['Galão', 'Garrafa'],
  })
  embalagem: string;

  loteId: number;
  movimentoEstoqueId: number | null;
}
