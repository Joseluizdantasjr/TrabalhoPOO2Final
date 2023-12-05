import { Router } from "express";
import AlunoController from "../controllers/AlunoController";

const AlunoRoute = Router();

AlunoRoute.get("/", AlunoController.listarAluno);

AlunoRoute.post("/aluno/insert", AlunoController.preencherAluno);

AlunoRoute.patch("/aluno/update/matricula", AlunoController.atualizarAluno);

AlunoRoute.delete("/aluno/delete/matricula", AlunoController.deletarAluno);

export default AlunoRoute;