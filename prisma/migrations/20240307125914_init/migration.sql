-- AlterTable
CREATE SEQUENCE itensvenda_id_seq;
ALTER TABLE "ItensVenda" ALTER COLUMN "id" SET DEFAULT nextval('itensvenda_id_seq');
ALTER SEQUENCE itensvenda_id_seq OWNED BY "ItensVenda"."id";

-- AlterTable
CREATE SEQUENCE vendas_id_seq;
ALTER TABLE "Vendas" ALTER COLUMN "id" SET DEFAULT nextval('vendas_id_seq');
ALTER SEQUENCE vendas_id_seq OWNED BY "Vendas"."id";
