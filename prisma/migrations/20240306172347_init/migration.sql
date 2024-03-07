-- CreateTable
CREATE TABLE "Clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "sexo" TEXT NOT NULL
);
