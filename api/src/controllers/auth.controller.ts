import type { Request, Response } from "express";
import { EstudanteService } from "../services/estudante-service.js";

export class AuthController {
    private estudanteService = new EstudanteService();

    public async login(req: Request, res: Response) {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).send({
                ok: false,
                message: "Informe todos os campos."
            });
        }

        const estudante = await this.estudanteService.obtemEstudantePorEmail(email);
        if (!estudante) {
            return res.status(404).send({
                ok: false,
                message: "E-mail não encontrado."
            });
        }

        if (estudante.senha !== senha) {
            return res.status(400).send({
                ok: false,
                message: "Senha incorreta."
            });
        }

        return res.status(200).send({
            ok: true,
            message: "Login realizado com sucesso!"
        });
    }
}