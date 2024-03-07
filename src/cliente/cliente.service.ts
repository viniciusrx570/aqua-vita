import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClienteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createClienteDto: CreateClienteDto): Promise<CreateClienteDto> {
    return await this.prisma.clientes.create({
      data: createClienteDto,
    });
  }

  async findAll() {
    return await this.prisma.clientes.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.clientes.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    return await this.prisma.clientes.update({
      data: updateClienteDto,
      where: {
        id: id,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.clientes.delete({
      where: {
        id: id,
      },
    });
  }
}
