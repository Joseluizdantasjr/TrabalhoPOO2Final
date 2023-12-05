import { Router } from "express";
import EstandeController from "../controllers/EstandeController";

const EstandeRoute = Router();

EstandeRoute.get("/", EstandeController.listarEstande);

EstandeRoute.post("/estande/insert", EstandeController.preencherEstande);

EstandeRoute.patch("/estande/:numero_estande", EstandeController.atualizarEstande);

EstandeRoute.delete("/estande/:numero_estande", EstandeController.deletarEstande);

export default EstandeRoute;