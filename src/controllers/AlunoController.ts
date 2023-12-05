import { Request, Response } from "express";
import AlunoServices from "../services/AlunoServices";
import { Prisma } from "@prisma/client";

class AlunoController{
    constructor(){}

    async preencherAluno(req: Request, res: Response){
        try{
            const aluno: Prisma.AlunoCreateInput = req.body;

            const alunoCriado = await AlunoServices.preencherAluno(aluno);


        }
        catch(error){
            console.log(error);
            return res.json(400);
        }

    }
    async atualizarAluno(req: Request, res: Response){
        try{
            const matricula = req.params.matricula;
            const aluno: Prisma.AlunoCreateInput = req.body
            const alunoAtualizado = await AlunoServices.atualizarAluno(matricula, aluno)
            return res.json(aluno);
        }
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async deletarAluno(req: Request, res: Response){
        try {
            const matricula = req.params.matricula;
            const aluno = await AlunoServices.deletarAluno(matricula);
            return res.json(aluno);
        }   
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }
    async listarAluno(req: Request, res: Response){
        try{
            const alunos = await AlunoServices.listarAluno();
            res.render("Aluno", {alunos: alunos});
        }
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }
}
export default new AlunoController();