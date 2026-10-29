import type { Request, Response } from "express";
import { EstudanteService } from "../services/estudante-service.js";
import { EmpresaService } from "../services/empresa-service.js";
import { handleError } from "../utils/handle.error.js";

export class AuthController {
    private estudanteService = new EstudanteService();
    private empresaService = new EmpresaService();

    public async login(req: Request, res: Response) {
        try {
            const { email, senha, tipo } = req.body;

            if (!email || !senha) {
                return res.status(400).send({
                    ok: false,
                    message: "Informe todos os campos."
                });
            }

            if (tipo !== "estudante" && tipo !== "empresa") {
                return res.status(400).send({
                    ok: false,
                    message: "Tipo de conta inválido."
                });
            }

            let usuario;

            if (tipo === "estudante") {
                usuario = await this.estudanteService.obtemEstudantePorEmail(email);
            } else if (tipo === "empresa") {
                usuario = await this.empresaService.obterEmpresaPorEmail(email);
            }

            if (!usuario || usuario.senha !== senha) {
                return res.status(401).send({
                    ok: false,
                    message: "E-mail ou senha inválidos."
                });
            }

            return res.status(200).send({
                ok: true,
                message: "Login realizado com sucesso!"
            });
        } catch (error) {
            return handleError(error, res);
        }
    }
}