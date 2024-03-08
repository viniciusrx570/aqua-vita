import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ProdutoModule } from './produto/produto.module';
import { ClienteModule } from './cliente/cliente.module';
import { VendaModule } from './venda/venda.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, ProdutoModule, ClienteModule, VendaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
