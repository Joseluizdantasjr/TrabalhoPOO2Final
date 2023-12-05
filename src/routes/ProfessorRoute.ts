import { Router } from "express";
import ProfessorController from "../controllers/ProfessorController";

const ProfessorRoute = Router();

ProfessorRoute.get("/", ProfessorController.listarProfessor);

ProfessorRoute.post("/professor/insert", ProfessorController.preencherProfessor);

ProfessorRoute.patch("/professor/update/matricula", ProfessorController.atualizarProfessor);

ProfessorRoute.delete("/professor/delete/matricula", ProfessorController.deletarProfessor);

export default ProfessorRoute;