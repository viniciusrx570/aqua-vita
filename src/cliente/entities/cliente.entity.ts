import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Clientes } from '@prisma/client';

export class Cliente implements Clientes {
  @ApiProperty()
  id: number;
  @ApiProperty({ required: false, nullable: true })
  nome: string;
  @ApiProperty()
  cpf: string | null;
  @ApiPropertyOptional({ nullable: true })
  data_nascimento: string | null;
  @ApiPropertyOptional({
    description: 'sexo',
    default: 'M',
    enum: ['M', 'F'],
    nullable: true,
  })
  sexo: string | null;
}
