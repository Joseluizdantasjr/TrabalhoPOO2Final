import { Prisma, PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient();

class AvaliacaoAlunoServices{
// preenchimento de dados dos alunos
    async preencherAvaliacaoAluno(avaliacaoAluno: Prisma.AvaliacaoAlunoCreateInput) 
    {
        try{
            const avaliacaoAlunoCriada = await prismaClient.avaliacaoAluno.create({
                data: avaliacaoAluno
            });
            return avaliacaoAlunoCriada;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async atualizarAvaliacaoAluno(numero_avaliacao: string, avaliacaoAluno: Prisma.AvaliacaoAlunoCreateInput){
        try {
            const avaliacaoAlunoAtualizada = await prismaClient.avaliacaoAluno.update({
                where: {
                    numero_avaliacao
                },
                data: avaliacaoAluno
            });
            return avaliacaoAlunoAtualizada;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async deletarAvaliacaoAluno(numero_avaliacao: string) {
        try{
            await prismaClient.avaliacaoAluno.delete({
                where: {numero_avaliacao}
            })
            return "Deletado com sucesso";
        } 
        catch(error){
            console.log(error);
            return null;
        }
    }

    async listarAvaliacaoAluno(){
        try{
            const lista = await prismaClient.avaliacaoAluno.findMany()
            return lista;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }
}
export default new AvaliacaoAlunoServices();