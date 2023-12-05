import { Request, Response } from "express";
import AvaliacaoProfessorServices from "../services/AvaliacaoProfessorServices";
import { Prisma } from "@prisma/client";

class AvaliacaoProfessorController {
    constructor(){}

    async preencherAvaliacaoProfessor(req: Request, res: Response){
        try{
            const avaliacaoProfessor: Prisma.AvaliacaoProfessorCreateInput = req.body;

            const avaliacaoProfessorrCriada = await AvaliacaoProfessorServices.preencherAvaliacaoProfessor(avaliacaoProfessor);


        }
        catch(error){
            console.log(error);
            return res.json(400);
        }
        
    }

    async atualizarAvaliacaoProfessor(req: Request, res: Response){
        try{
            const numero_avaliacao = req.params.numero_avaliacao;
            const avaliacaoProfessor: Prisma.AvaliacaoProfessorCreateInput = req.body
            const avaliacaoProfessorAtualizada = await AvaliacaoProfessorServices.atualizarAvaliacaoProfessor(numero_avaliacao, avaliacaoProfessor)
            return res.json(avaliacaoProfessor);
        }
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async deletarAvaliacaoProfessor(req: Request, res: Response){
        try {
            const numero_avaliacao = req.params.numero_avaliacao;
            const avaliacaoProfessor = await AvaliacaoProfessorServices.deletarAvaliacaoProfessor(numero_avaliacao);
            return res.json(avaliacaoProfessor);
        }   
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }
    async listarAvaliacaoAluno(req: Request, res: Response){
        try{
            const avaliacoesProfessor = await AvaliacaoProfessorServices.listarAvaliacaoProfessor();
            res.render("AvaliacaoProfessor", {avaliacoesProfessor: avaliacoesProfessor});
        }
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }
}
export default new AvaliacaoProfessorController();