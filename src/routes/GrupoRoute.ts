import { Router } from "express";
import GrupoController from "../controllers/GrupoController";

const GrupoRoute = Router();

GrupoRoute.get("/", GrupoController.listarGrupo);

GrupoRoute.post("/grupo/insert", GrupoController.preencherGrupo);

GrupoRoute.patch("/grupo/update/:numero_grupo", GrupoController.atualizarGrupo);

GrupoRoute.delete("/grupo/delete/:numero_grupo", GrupoController.deletarGrupo);

export default GrupoRoute;