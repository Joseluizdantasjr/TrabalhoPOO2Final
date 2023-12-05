<div align="center">
  
# **Projeto Programação Orientada À Objetos 2**
</div>

### Alunos: Christopher Thompson, Gabriel Guido, Guilherme Mafra e José Luiz Dantas
### Prof. Otávio Lube
### Turma: CC4M

<br>

# **1. Introdução**
## Descrição do minimundo 

O InovaWeek é um evento anual da Universidade Vila Velha que reúne estudantes, professores e profissionais de diversas áreas para discutir inovação científica e empreendedorismo. Além disso o evento tem como objetivo principal fomentar a inovação científica, incentivando os participantes a desenvolverem projetos inovadores. O Inovaweek proporciona uma gama de atividades e oportunidades para os participantes, incluindo: exposições de projetos, palestras e workshops e além de tudo possibilita o networking (permite aos participantes se conectarem com outros profissionais e estudantes interessados em inovação). Esta apresentação vale nota para o corrente semestre do ano. Além do mais, os alunos apresentarem trabalhos em grupos que  exibem os trabalhos dos estudantes durante um determinado período de tempo. O evento, atualmente, dura 3 dias, mas poderia variar esses dias. A nota do grupo é calculada como a média de avaliações feitas pelos professores em visitas aos estudante, ademais três professores são incumbidos desta avaliação, porém estes critérios podem variar e, inclusive os alunos poderiam começar a avaliar os estandes.

# **2. Iniciando o Projeto**
Para iniciarmos o projeto é necessario fazer as seguintes instalações:

#### Criar e abrir o projeto
```
mkdir hello-prisma 
cd hello-prisma
```
#### Baixar e instalar tudo necessário
``` 
npm install typescript --save-dev
npx tsc --init
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite
npm install express @types/express --save-dev
npm install ejs

```

# **3. Rodando o Projeto**
#### Inserir no terminal para migras para o banco de dados os dados feitos no schema.prisma
```
npx prisma migrate dev --name init
```

#### Insira no terminal para rodar a main
>```
>   npx ts-node script.ts
>```

#### Inserir no terminal para abrir o server
```
npx ts-node-dev ./src/server.ts   
```

# 4 Linguagens utilizadas no projeto:
- Prisma
- Draw.io
- TypeScript
- EJS
