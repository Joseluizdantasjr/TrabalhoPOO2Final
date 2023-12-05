import { Request, Response } from "express";
import AvaliacaoServices from "../services/AvaliacaoServices";
import { Prisma } from "@prisma/client";

class AvaliacaoController{
    constructor(){}

    async preencherAvaliacao(req: Request, res: Response){
        try{
            const avaliacao: Prisma.AvaliacaoCreateInput = req.body;

            const avaliacaoCriada = await AvaliacaoServices.preencherAvaliacao(avaliacao);


        }
        catch(error){
            console.log(error);
            return res.json(400);
        }

    }
    async atualizarAvaliacao(req: Request, res: Response){
        try{
            const numero_avaliacao = req.params.numero_avaliacao;
            const avaliacao: Prisma.AvaliacaoCreateInput = req.body
            const avaliacaoAtualizada = await AvaliacaoServices.atualizarAvaliacao(numero_avaliacao, avaliacao)
            return res.json(avaliacao);
        }
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async deletarAvaliacao(req: Request, res: Response){
        try {
            const numero_avaliacao = req.params.numero_avaliacao;
            const avaliacao = await AvaliacaoServices.deletarAvaliacao(numero_avaliacao);
            return res.json(avaliacao);
        }   
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }
    async listarAvaliacao(req: Request, res: Response){
        try{
            const avaliacoes = await AvaliacaoServices.listarAvaliacao();
            res.render("Avaliacao", {avaliacoes: avaliacoes});
        }
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }
}
export default new AvaliacaoController();