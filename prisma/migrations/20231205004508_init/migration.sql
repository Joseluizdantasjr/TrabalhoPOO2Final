-- CreateTable
CREATE TABLE "Aluno" (
    "nome_aluno" TEXT NOT NULL,
    "matricula" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "numero_grupo" TEXT,
    CONSTRAINT "Aluno_numero_grupo_fkey" FOREIGN KEY ("numero_grupo") REFERENCES "Grupo" ("numero_grupo") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Professor" (
    "nome_professor" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "matricula" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Grupo" (
    "numero_grupo" TEXT NOT NULL PRIMARY KEY,
    "nome_grupo" TEXT NOT NULL,
    "matricula_lider" TEXT NOT NULL,
    "numero_estande" TEXT NOT NULL,
    "dia_apresentacao" DATETIME NOT NULL,
    CONSTRAINT "Grupo_matricula_lider_fkey" FOREIGN KEY ("matricula_lider") REFERENCES "Aluno" ("matricula") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Grupo_numero_estande_fkey" FOREIGN KEY ("numero_estande") REFERENCES "Estande" ("numero_estande") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Estande" (
    "numero_estande" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "AvaliacaoAluno" (
    "numero_avaliacao" TEXT NOT NULL PRIMARY KEY,
    "matricula_avaliador_aluno" TEXT NOT NULL,
    "numero_grupo_avaliado" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,
    CONSTRAINT "AvaliacaoAluno_numero_grupo_avaliado_fkey" FOREIGN KEY ("numero_grupo_avaliado") REFERENCES "Grupo" ("numero_grupo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AvaliacaoAluno_matricula_avaliador_aluno_fkey" FOREIGN KEY ("matricula_avaliador_aluno") REFERENCES "Aluno" ("matricula") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AvaliacaoProfessor" (
    "numero_avaliacao" TEXT NOT NULL PRIMARY KEY,
    "matricula_avaliador_professor" TEXT NOT NULL,
    "numero_grupo_avaliado" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,
    CONSTRAINT "AvaliacaoProfessor_numero_grupo_avaliado_fkey" FOREIGN KEY ("numero_grupo_avaliado") REFERENCES "Grupo" ("numero_grupo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AvaliacaoProfessor_matricula_avaliador_professor_fkey" FOREIGN KEY ("matricula_avaliador_professor") REFERENCES "Professor" ("matricula") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "numero_avaliacao" TEXT NOT NULL PRIMARY KEY,
    "numero_avaliacao_aluno" TEXT NOT NULL,
    "numero_avaliacao_professor" TEXT NOT NULL,
    "numero_grupo_avaliado" TEXT NOT NULL,
    "nota1" INTEGER NOT NULL,
    "nota2" INTEGER NOT NULL,
    "notaFinal" REAL NOT NULL,
    CONSTRAINT "Avaliacao_numero_grupo_avaliado_fkey" FOREIGN KEY ("numero_grupo_avaliado") REFERENCES "Grupo" ("numero_grupo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_numero_avaliacao_aluno_nota1_fkey" FOREIGN KEY ("numero_avaliacao_aluno", "nota1") REFERENCES "AvaliacaoAluno" ("numero_avaliacao", "nota") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_numero_avaliacao_professor_nota2_fkey" FOREIGN KEY ("numero_avaliacao_professor", "nota2") REFERENCES "AvaliacaoProfessor" ("numero_avaliacao", "nota") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_matricula_key" ON "Aluno"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_matricula_key" ON "Professor"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_numero_grupo_key" ON "Grupo"("numero_grupo");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_matricula_lider_key" ON "Grupo"("matricula_lider");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_numero_estande_key" ON "Grupo"("numero_estande");

-- CreateIndex
CREATE UNIQUE INDEX "Estande_numero_estande_key" ON "Estande"("numero_estande");

-- CreateIndex
CREATE UNIQUE INDEX "AvaliacaoAluno_numero_avaliacao_key" ON "AvaliacaoAluno"("numero_avaliacao");

-- CreateIndex
CREATE UNIQUE INDEX "AvaliacaoAluno_numero_grupo_avaliado_key" ON "AvaliacaoAluno"("numero_grupo_avaliado");

-- CreateIndex
CREATE UNIQUE INDEX "AvaliacaoAluno_numero_avaliacao_nota_key" ON "AvaliacaoAluno"("numero_avaliacao", "nota");

-- CreateIndex
CREATE UNIQUE INDEX "AvaliacaoProfessor_numero_avaliacao_key" ON "AvaliacaoProfessor"("numero_avaliacao");

-- CreateIndex
CREATE UNIQUE INDEX "AvaliacaoProfessor_numero_grupo_avaliado_key" ON "AvaliacaoProfessor"("numero_grupo_avaliado");

-- CreateIndex
CREATE UNIQUE INDEX "AvaliacaoProfessor_numero_avaliacao_nota_key" ON "AvaliacaoProfessor"("numero_avaliacao", "nota");

-- CreateIndex
CREATE UNIQUE INDEX "Avaliacao_numero_avaliacao_key" ON "Avaliacao"("numero_avaliacao");

-- CreateIndex
CREATE UNIQUE INDEX "Avaliacao_numero_avaliacao_aluno_key" ON "Avaliacao"("numero_avaliacao_aluno");

-- CreateIndex
CREATE UNIQUE INDEX "Avaliacao_numero_avaliacao_professor_key" ON "Avaliacao"("numero_avaliacao_professor");

-- CreateIndex
CREATE UNIQUE INDEX "Avaliacao_numero_grupo_avaliado_key" ON "Avaliacao"("numero_grupo_avaliado");

-- CreateIndex
CREATE UNIQUE INDEX "Avaliacao_numero_avaliacao_aluno_nota1_key" ON "Avaliacao"("numero_avaliacao_aluno", "nota1");

-- CreateIndex
CREATE UNIQUE INDEX "Avaliacao_numero_avaliacao_professor_nota2_key" ON "Avaliacao"("numero_avaliacao_professor", "nota2");
