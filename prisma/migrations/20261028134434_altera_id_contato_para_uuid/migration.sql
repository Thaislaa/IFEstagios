/*
  Warnings:

  - The primary key for the `contatos` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "contatos" DROP CONSTRAINT "contatos_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "contatos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "contatos_id_seq";
