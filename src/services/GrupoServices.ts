import { Prisma, PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient();

class GrupoServices{
// preenchimento de dados dos alunos
    async preencherGrupo(grupo: Prisma.GrupoCreateInput) 
    {
        try{
            const grupoCriado = await prismaClient.grupo.create({
                data: grupo
            });
            return grupoCriado;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async atualizarGrupo(numero_grupo: string, grupo: Prisma.GrupoCreateInput){
        try {
            const grupoAtualizado = await prismaClient.grupo.update({
                where: {
                    numero_grupo
                },
                data: grupo
            });
            return grupoAtualizado;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async deletarGrupo(numero_grupo: string) {
        try{
            await prismaClient.grupo.delete({
                where: {numero_grupo}
            })
            return "Deletado com sucesso";
        } 
        catch(error){
            console.log(error);
            return null;
        }
    }

    async listarGrupo(){
        try{
            const lista = await prismaClient.grupo.findMany()
            return lista;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }
}
export default new GrupoServices();