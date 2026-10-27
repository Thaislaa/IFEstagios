import type { Request, Response } from "express";
import { EstudanteService } from "../services/estudante-service.js";
import { isValidId } from "../utils/is-valid-id.js";
import { handleError } from "../utils/handle.error.js";

export class EstudanteController {
    private estudanteService = new EstudanteService();

    public async listar(req: Request, res: Response) {
        try {
            const estudantes = await this.estudanteService.listar();

            return res.status(200).send({
                ok: true,
                message: "Estudantes listados com sucesso!",
                data: estudantes
            });

        } catch (error) {
            return handleError(error, res);
        }
    }

    public async obterPorId(req: Request, res: Response) {
        try {
            const estudanteId = req.params.id;

            if (!isValidId(estudanteId)) {
                return res.status(400).send({
                    ok: false,
                    message: "Id informado é inválido."
                })
            }

            const estudante = await this.estudanteService.obterPorId(estudanteId);

            if (!estudante) {
                return res.status(404).send({
                    ok: false,
                    message: "Estudante não encontrado."
                })
            }

            return res.status(200).send({
                ok: true,
                message: "Estudante encontrado com sucesso!",
                data: estudante
            })

        } catch (error) {
            return handleError(error, res);
        }
    }

    public async criar(req: Request, res: Response) {
        try {
            const { nome, curso, turno, email, senha, linkedin, curriculo } = req.body;

            if (!nome || !curso || !turno || !email || !senha) {
                return res.status(400).send({
                    ok: false,
                    message: "Informe todos os campos."
                });
            }

            const estudante = await this.estudanteService.criar({
                nome,
                curso,
                turno,
                email,
                senha,
                linkedin,
                curriculo
            });

            return res.status(201).send({
                ok: true,
                message: "Estudante criado com sucesso!",
                data: estudante
            });

        } catch (error) {
            return handleError(error, res);
        }
    }

    public async atualizar(req: Request, res: Response) {
        try {
            const estudanteId = req.params.id;

            if (!isValidId(estudanteId)) {
                return res.status(400).send({
                    ok: false,
                    message: "Id informado é inválido."
                });
            }

            const estudanteExiste = await this.estudanteService.obterPorId(estudanteId);
            if (!estudanteExiste) {
                return res.status(404).send({
                    ok: false,
                    message: "Estudante não encontrado."
                });
            }

            const { nome, curso, turno, email, senha, linkedin, curriculo } = req.body;

            if (!nome && !curso && !turno && !email && !senha && !linkedin && !curriculo) {
                return res.status(400).send({
                    ok: false,
                    message: "Informe pelo menos um campo para ser atualizado."
                });
            }

            const estudante = await this.estudanteService.atualizar(estudanteId, {
                nome,
                curso,
                turno,
                email,
                senha,
                linkedin,
                curriculo
            });

            return res.status(200).send({
                ok: true,
                message: "Estudante atualizado com sucesso!",
                data: estudante
            });
        } catch (error) {
            return handleError(error, res);
        }
    }

    public async deletar(req: Request, res: Response) {
        try {
            const estudanteId = req.params.id;

            if (!isValidId(estudanteId)) {
                return res.status(400).send({
                    ok: false,
                    message: "Id informado é inválido."
                });
            }

            const estudanteExiste = await this.estudanteService.obterPorId(estudanteId);
            if (!estudanteExiste) {
                return res.status(404).send({
                    ok: false,
                    message: "Estudante não encontrado."
                });
            }

            const estudante = await this.estudanteService.deletar(estudanteId);
            return res.status(200).send({
                ok: true,
                message: "Estudante deletado com sucesso!",
                data: estudante
            });
        } catch (error) {
            return handleError(error, res);
        }
    }
}