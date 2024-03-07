-- CreateTable
CREATE TABLE "Clientes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT,
    "data_nascimento" TEXT,
    "sexo" TEXT,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produtos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "tipo" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "embalagem" TEXT NOT NULL,
    "loteId" INTEGER NOT NULL,
    "movimentoEstoqueId" INTEGER,

    CONSTRAINT "Produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lotes" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "dataProducao" TIMESTAMP(3) NOT NULL,
    "dataValidade" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lotes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovimentoEstoque" (
    "id" SERIAL NOT NULL,
    "loteId" INTEGER NOT NULL,
    "tipo" TEXT,
    "quantidade" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "motivoId" INTEGER NOT NULL,

    CONSTRAINT "MovimentoEstoque_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Motivo" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Motivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendas" (
    "id" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Vendas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItensVenda" (
    "id" INTEGER NOT NULL,
    "vendasId" INTEGER NOT NULL,
    "loteId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL DEFAULT 0,
    "valor" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "ValorTotal" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "ItensVenda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MotivoToMovimentoEstoque" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MotivoToMovimentoEstoque_AB_unique" ON "_MotivoToMovimentoEstoque"("A", "B");

-- CreateIndex
CREATE INDEX "_MotivoToMovimentoEstoque_B_index" ON "_MotivoToMovimentoEstoque"("B");

-- AddForeignKey
ALTER TABLE "Produtos" ADD CONSTRAINT "Produtos_loteId_fkey" FOREIGN KEY ("loteId") REFERENCES "lotes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produtos" ADD CONSTRAINT "Produtos_movimentoEstoqueId_fkey" FOREIGN KEY ("movimentoEstoqueId") REFERENCES "MovimentoEstoque"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovimentoEstoque" ADD CONSTRAINT "MovimentoEstoque_loteId_fkey" FOREIGN KEY ("loteId") REFERENCES "lotes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vendas" ADD CONSTRAINT "Vendas_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MotivoToMovimentoEstoque" ADD CONSTRAINT "_MotivoToMovimentoEstoque_A_fkey" FOREIGN KEY ("A") REFERENCES "Motivo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MotivoToMovimentoEstoque" ADD CONSTRAINT "_MotivoToMovimentoEstoque_B_fkey" FOREIGN KEY ("B") REFERENCES "MovimentoEstoque"("id") ON DELETE CASCADE ON UPDATE CASCADE;
