import { Prisma, PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient();

class ProfessorServices{
// preenchimento de dados dos alunos
    async preencherProfessor(professor: Prisma.ProfessorCreateInput) 
    {
        try{
            const professorCriado = await prismaClient.professor.create({
                data: professor
            });
            return professorCriado;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async atualizarProfessor(matricula: string, professor: Prisma.ProfessorCreateInput){
        try {
            const professorAtualizado = await prismaClient.professor.update({
                where: {
                    matricula
                },
                data: professor
            });
            return professorAtualizado;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async deletarProfessor(matricula: string) {
        try{
            await prismaClient.professor.delete({
                where: {matricula}
            })
            return "Deletado com sucesso";
        } 
        catch(error){
            console.log(error);
            return null;
        }
    }

    async listarProfessor(){
        try{
            const lista = await prismaClient.professor.findMany()
            return lista;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }
}
export default new ProfessorServices();