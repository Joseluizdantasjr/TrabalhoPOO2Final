import { Prisma, PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient();

class EstandeServices{
// preenchimento de dados dos alunos
    async preencherEstande(estande: Prisma.EstandeCreateInput) 
    {
        try{
            const estandeCriado = await prismaClient.estande.create({
                data: estande
            });
            return estandeCriado;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async atualizarEstande(numero_estande: string, estande: Prisma.EstandeCreateInput){
        try {
            const estandeAtualizado = await prismaClient.estande.update({
                where: {
                    numero_estande
                },
                data: estande
            });
            return estandeAtualizado;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async deletarEstande(numero_estande: string) {
        try{
            await prismaClient.estande.delete({
                where: {numero_estande}
            })
            return "Deletado com sucesso";
        } 
        catch(error){
            console.log(error);
            return null;
        }
    }

    async listarEstande(){
        try{
            const lista = await prismaClient.estande.findMany()
            return lista;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }
}
export default new EstandeServices();