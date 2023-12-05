import { Router } from "express";
import AvaliacaoAlunoController from "../controllers/AvaliacaoAlunoController";

const AvaliacaoAlunoRoute = Router();

AvaliacaoAlunoRoute.get("/", AvaliacaoAlunoController.listarAvaliacaoAluno);

AvaliacaoAlunoRoute.post("/avaliacaoAluno/insert", AvaliacaoAlunoController.preencherAvaliacaoAluno);

AvaliacaoAlunoRoute.patch("/avaliacaoAluno/update/numero_avaliacao", AvaliacaoAlunoController.atualizarAvaliacaoAluno);

AvaliacaoAlunoRoute.delete("/avaliacaoAluno/delete/numero_avaliacao", AvaliacaoAlunoController.deletarAvaliacaoAluno);

export default AvaliacaoAlunoRoute;