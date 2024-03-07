import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Produtos } from '@prisma/client';
import { ProdutosEntity } from './entities/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProdutoDto: CreateProdutoDto) {
    return await this.prisma.produtos.create({
      data: createProdutoDto,
    });
  }

  async findAll() {
    return  this.prisma.produtos.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.produtos.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto): Promise<Produtos> {
    return await this.prisma.produtos.update({
      where: {
        id: id,
      },
      data: updateProdutoDto,
    });
  }

  async remove(id: number): Promise<Produtos> {
    return this.prisma.produtos.delete({
      where: {
        id: id,
      },
    });
  }
}
