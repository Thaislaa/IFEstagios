import { Router } from "express";
import { EstudanteService } from "../services/estudante-service.js";

const estudanteRoutes = Router();

const estudanteRepository = new EstudanteService();

estudanteRoutes.get("/", async (req, res) => {
    const estudantes = await estudanteRepository.listar();
    res.json(estudantes);
});

estudanteRoutes.get("/:id", async (req, res) => {
    const estudante = await estudanteRepository.obterPorId(req.params.id);
    res.json(estudante);
});

estudanteRoutes.post("/", async (req, res) => {
    const estudante = await estudanteRepository.criar(req.body);
    res.json(estudante)
});

estudanteRoutes.put("/:id", async (req, res) => {
    const estudante = await estudanteRepository.atualizar(req.params.id, req.body);
    res.json(estudante);
});

estudanteRoutes.delete("/:id", async (req, res) => {
    const estudante = await estudanteRepository.deletar(req.params.id);
    res.json(estudante);
})

export { estudanteRoutes };