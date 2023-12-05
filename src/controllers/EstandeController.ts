import { Request, Response } from "express";
import EstandeServices from "../services/EstandeServices";
import { Prisma } from "@prisma/client";

class EstandeController{
    constructor(){}

    async preencherEstande(req: Request, res: Response){
        try{
            const estande: Prisma.EstandeCreateInput = req.body;

            const estandeCriado = await EstandeServices.preencherEstande(estande);

        }
        catch(error){
            console.log(error);
            return res.json(400);
        }

    }
    async atualizarEstande(req: Request, res: Response){
        try{
            const numero_estande = req.params.numero_estande;
            const estande: Prisma.EstandeCreateInput = req.body
            const estandeAtualizado = await EstandeServices.atualizarEstande(numero_estande, estande)
            return res.json(estande);
        }
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async deletarEstande(req: Request, res: Response){
        try {
            const numero_estande = req.params.numero_estande;
            const estande = await EstandeServices.deletarEstande(numero_estande);
            return res.json(estande);
        }   
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }
    async listarEstande(req: Request, res: Response){
        try{
            const estandes = await EstandeServices.listarEstande();
            res.render("Estande", {estandes: estandes});
        }
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }
}
export default new EstandeController();