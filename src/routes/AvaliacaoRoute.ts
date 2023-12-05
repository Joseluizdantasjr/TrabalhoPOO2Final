import { Router } from "express";
import AvaliacaoController from "../controllers/AvaliacaoController";

const AvaliacaoRoute = Router();

AvaliacaoRoute.get("/", AvaliacaoController.listarAvaliacao);

AvaliacaoRoute.post("/avalicao/insert", AvaliacaoController.preencherAvaliacao);

AvaliacaoRoute.patch("/avaliacao/update/matricula", AvaliacaoController.atualizarAvaliacao);

AvaliacaoRoute.delete("/avalicao/delete/matricula", AvaliacaoController.deletarAvaliacao);

export default AvaliacaoRoute;