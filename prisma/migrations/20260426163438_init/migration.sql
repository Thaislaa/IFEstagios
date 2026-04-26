-- CreateTable
CREATE TABLE "estudantes" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "curso" VARCHAR(255) NOT NULL,
    "turno" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,
    "linkedin" VARCHAR(255),
    "curriculo" VARCHAR(255),
    "dt_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "estudantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "empresas" (
    "id" TEXT NOT NULL,
    "razao_social" VARCHAR(255) NOT NULL,
    "nome_fantasia" VARCHAR(255) NOT NULL,
    "endereco_comercial" VARCHAR(255) NOT NULL,
    "setor_atuacao" VARCHAR(255) NOT NULL,
    "email_corporativo" VARCHAR(255) NOT NULL,
    "cnpj" VARCHAR(18) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,
    "dt_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "empresas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contatos" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "mensagem" TEXT NOT NULL,
    "dataEnvio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contatos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "estudantes_email_key" ON "estudantes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "empresas_email_corporativo_key" ON "empresas"("email_corporativo");

-- CreateIndex
CREATE UNIQUE INDEX "empresas_cnpj_key" ON "empresas"("cnpj");
