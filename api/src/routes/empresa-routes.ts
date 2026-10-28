import { Router } from "express";
import { EmpresaController } from "../controllers/empresa.controller.js";

const empresaRoutes = Router();

const empresaController = new EmpresaController();

empresaRoutes.get("/", empresaController.listar.bind(empresaController));
empresaRoutes.get("/:id", empresaController.obterPorId.bind(empresaController));
empresaRoutes.post("/", empresaController.criar.bind(empresaController));
empresaRoutes.put("/:id", empresaController.atualizar.bind(empresaController));
empresaRoutes.delete("/:id", empresaController.deletar.bind(empresaController));

export { empresaRoutes };