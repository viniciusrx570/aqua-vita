import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, ProdutoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
