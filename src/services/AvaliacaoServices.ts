import { Prisma, PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient();

class AvaliacaoServices{
// preenchimento de dados dos alunos
    async preencherAvaliacao(avaliacao: Prisma.AvaliacaoCreateInput) 
    {
        try{
            const avaliacaoCriada = await prismaClient.avaliacao.create({
                data: avaliacao
            });
            return avaliacaoCriada;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async atualizarAvaliacao(numero_avaliacao: string, avaliacao: Prisma.AvaliacaoCreateInput){
        try {
            const avaliacaoAtualizada = await prismaClient.avaliacao.update({
                where: {
                    numero_avaliacao
                },
                data: avaliacao
            });
            return avaliacaoAtualizada;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async deletarAvaliacao(numero_avaliacao: string) {
        try{
            await prismaClient.avaliacao.delete({
                where: {numero_avaliacao}
            })
            return "Deletado com sucesso";
        } 
        catch(error){
            console.log(error);
            return null;
        }
    }

    async listarAvaliacao(){
        try{
            const lista = await prismaClient.avaliacao.findMany()
            return lista;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }
}
export default new AvaliacaoServices();