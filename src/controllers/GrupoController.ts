import { Request, Response } from "express";
import GrupoServices from "../services/GrupoServices";
import { Prisma } from "@prisma/client";

class GrupoController{
    constructor(){}

    async preencherGrupo(req: Request, res: Response){
        try{
            const grupo: Prisma.GrupoCreateInput = req.body;

            const grupoCriado = await GrupoServices.preencherGrupo(grupo);

        }
        catch(error){
            console.log(error);
            return res.json(400);
        }

    }
    async atualizarGrupo(req: Request, res: Response){
        try{
            const numero_grupo = req.params.numero_grupo;
            const grupo: Prisma.GrupoCreateInput = req.body
            const grupoAtualizado = await GrupoServices.atualizarGrupo(numero_grupo, grupo)
            return res.json(grupo);
        }
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async deletarGrupo(req: Request, res: Response){
        try {
            const numero_grupo = req.params.numero_grupo;
            const grupo = await GrupoServices.deletarGrupo(numero_grupo);
            return res.json(grupo);
        }   
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }
    async listarGrupo(req: Request, res: Response){
        try{
            const grupos = await GrupoServices.listarGrupo();
            res.render("Grupo", {grupos: grupos});
        }
        catch(error){
            console.log(error);
            return res.json(400);
        }
    }
}
export default new GrupoController();