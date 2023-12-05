import { Router } from "express";
import AvaliacaoProfessorController from "../controllers/AvaliacaoProfessorController";

const AvaliacaoProfessorRoute = Router();

AvaliacaoProfessorRoute.get("/", AvaliacaoProfessorController.listarAvaliacaoAluno);

AvaliacaoProfessorRoute.post("/avaliacaoProfessor/insert", AvaliacaoProfessorController.preencherAvaliacaoProfessor);

AvaliacaoProfessorRoute.patch("/avaliacaoProfessor/update/numero_avaliacao", AvaliacaoProfessorController.atualizarAvaliacaoProfessor);

AvaliacaoProfessorRoute.delete("/avaliacaoProfessor/delete/numero_avaliacao", AvaliacaoProfessorController.deletarAvaliacaoProfessor);

export default AvaliacaoProfessorRoute;