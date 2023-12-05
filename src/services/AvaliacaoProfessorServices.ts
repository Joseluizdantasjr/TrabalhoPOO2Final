import { Prisma, PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient();

class AvaliacaoProfessorServices{
// preenchimento de dados dos alunos
    async preencherAvaliacaoProfessor(avaliacaoProfessor: Prisma.AvaliacaoProfessorCreateInput) 
    {
        try{
            const avaliacaoProfessorCriada = await prismaClient.avaliacaoProfessor.create({
                data: avaliacaoProfessor
            });
            return avaliacaoProfessorCriada;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async atualizarAvaliacaoProfessor(numero_avaliacao: string, avaliacaoProfessor: Prisma.AvaliacaoProfessorCreateInput){
        try {
            const avaliacaoProfessorAtualizada = await prismaClient.avaliacaoProfessor.update({
                where: {
                    numero_avaliacao
                },
                data: avaliacaoProfessor
            });
            return avaliacaoProfessorAtualizada;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async deletarAvaliacaoProfessor(numero_avaliacao: string) {
        try{
            await prismaClient.avaliacaoProfessor.delete({
                where: {numero_avaliacao}
            })
            return "Deletado com sucesso";
        } 
        catch(error){
            console.log(error);
            return null;
        }
    }

    async listarAvaliacaoProfessor(){
        try{
            const lista = await prismaClient.avaliacaoProfessor.findMany()
            return lista;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }
}
export default new AvaliacaoProfessorServices();