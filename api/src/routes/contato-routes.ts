import { Router } from "express";
import { ContatoController } from "../controllers/contato.controller.js";

const contatoRoutes = Router();

const contatoController = new ContatoController();

contatoRoutes.get("/", contatoController.listar.bind(contatoController));
contatoRoutes.get("/:id", contatoController.obterPorId.bind(contatoController));
contatoRoutes.post("/", contatoController.criar.bind(contatoController));
contatoRoutes.delete("/:id", contatoController.deletar.bind(contatoController));

export { contatoRoutes };