import { Router } from "express";
import { EstudanteController } from "../controllers/estudante.controller.js";

const estudanteRoutes = Router();

const estudanteController = new EstudanteController();

estudanteRoutes.get("/", estudanteController.listar.bind(estudanteController));
estudanteRoutes.get("/:id", estudanteController.obterPorId.bind(estudanteController));
estudanteRoutes.post("/", estudanteController.criar.bind(estudanteController));
estudanteRoutes.put("/:id", estudanteController.atualizar.bind(estudanteController));
estudanteRoutes.delete("/:id", estudanteController.deletar.bind(estudanteController));

export { estudanteRoutes };