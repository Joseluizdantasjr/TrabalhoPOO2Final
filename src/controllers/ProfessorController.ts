import { Request, Response } from "express";
import ProfessorServices from "../services/ProfessorServices";
import { Prisma } from "@prisma/client";

class ProfessorController{
    constructor(){}

    async preencherProfessor(req: Request, res: Response){
        try{
            const professor: Prisma.ProfessorCreateInput = req.body;

            const professorCriado = await ProfessorServices.preencherProfessor(professor);


        }
        catch(error){
            console.log(error);
            return res.json(400);
        }

    }
    async atualizarProfessor(req: Request, res: Response){
        try{
            const matricula = req.params.matricula;
            const professor: Prisma.ProfessorCreateInput = req.body
            const professorAtualizado = await ProfessorServices.atualizarProfessor(matricula, professor)
            return res.json(professor);
        }
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async deletarProfessor(req: Request, res: Response){
        try {
            const matricula = req.params.matricula;
            const professor = await ProfessorServices.deletarProfessor(matricula);
            return res.json(professor);
        }   
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }
    async listarProfessor(req: Request, res: Response){
        try{
            const professores = await ProfessorServices.listarProfessor();
            res.render("Professor", {professores: professores});
        }
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }
}
export default new ProfessorController();