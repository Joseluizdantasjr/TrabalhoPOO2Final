import { Request, Response } from "express";
import AvaliacaoAlunoServices from "../services/AvaliacaoAlunoServices";
import { Prisma } from "@prisma/client";

class AvaliacaoAlunoController{
    constructor(){}

    async preencherAvaliacaoAluno(req: Request, res: Response){
        try{
            const avaliacaoAluno: Prisma.AvaliacaoAlunoCreateInput = req.body;

            const avaliacaoAlunoCriada = await AvaliacaoAlunoServices.preencherAvaliacaoAluno(avaliacaoAluno);


        }
        catch(error){
            console.log(error);
            return res.json(400);
        }

    }
    async atualizarAvaliacaoAluno(req: Request, res: Response){
        try{
            const numero_avaliacao = req.params.numero_avaliacao;
            const avaliacaoAluno: Prisma.AvaliacaoAlunoCreateInput = req.body
            const avaliacaoAlunoAtualizado = await AvaliacaoAlunoServices.atualizarAvaliacaoAluno(numero_avaliacao, avaliacaoAluno)
            return res.json(avaliacaoAluno);
        }
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async deletarAvaliacaoAluno(req: Request, res: Response){
        try {
            const numero_avaliacao = req.params.numero_avaliacao;
            const avaliacaoAluno = await AvaliacaoAlunoServices.deletarAvaliacaoAluno(numero_avaliacao);
            return res.json(avaliacaoAluno);
        }   
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }
    async listarAvaliacaoAluno(req: Request, res: Response){
        try{
            const avaliacoesAluno = await AvaliacaoAlunoServices.listarAvaliacaoAluno();
            res.render("AvaliacaoAluno", {avaliacoesAluno: avaliacoesAluno});
        }
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }
}
export default new AvaliacaoAlunoController();