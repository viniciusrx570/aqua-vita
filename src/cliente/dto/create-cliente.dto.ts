import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateClienteDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nome: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  cpf: string | null;
  @ApiProperty({})
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  data_nascimento: string | null;
  @ApiProperty({
    enum: ['M', 'F'],
    default: 'M',
  })
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  sexo: string | null;
}
