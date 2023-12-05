
import { Prisma, PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient();

class AlunoServices{
// preenchimento de dados dos alunos
    async preencherAluno(aluno: Prisma.AlunoCreateInput) 
    {
        try{
            const alunoCriado = await prismaClient.aluno.create({
                data: aluno
            });
            return aluno;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async atualizarAluno(matricula: string, aluno: Prisma.AlunoUpdateInput){
        try {
            const alunoAtualizado = await prismaClient.aluno.update({
                where: {
                    matricula
                },
                data: aluno
            });
            return aluno;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async deletarAluno(matricula: string) {
        try{
            await prismaClient.aluno.delete({
                where: {matricula}
            })
            return "Deletado com sucesso";
        } 
        catch(error){
            console.log(error);
            return null;
        }
    }

    async listarAluno(){
        try{
            const lista = await prismaClient.aluno.findMany()
            return lista;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }
}
export default new AlunoServices();