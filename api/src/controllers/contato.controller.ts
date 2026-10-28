import type { Request, Response } from "express";
import { ContatoService } from "../services/contato-service.js";
import { handleError } from "../utils/handle.error.js";
import { isValidId } from "../utils/is-valid-id.js";

export class ContatoController {
    private contatoService = new ContatoService();

    public async listar(req: Request, res: Response) {
        try {
            const contatos = await this.contatoService.listar();

            return res.status(200).send({
                ok: true,
                message: "Contatos listados com sucesso!",
                data: contatos
            });
        } catch (error) {
            return handleError(error, res);
        }
    }

    public async obterPorId(req: Request, res: Response) {
        try {
            const contatoId = req.params.id;

            if (!isValidId(contatoId)) {
                return res.status(400).send({
                    ok: false,
                    message: "Id informado é inválido."
                });
            }

            const contato = await this.contatoService.obterPorId(contatoId);
            if (!contato) {
                return res.status(404).send({
                    ok: false,
                    message: "Contato não encontrado."
                });
            }

            return res.status(200).send({
                ok: true,
                message: "Contato encontrado com sucesso!",
                data: contato
            })
        } catch (error) {
            return handleError(error, res);
        }
    }

    public async criar(req: Request, res: Response) {
        try {
            const { nome, email, mensagem } = req.body;

            if (!nome || !email || !mensagem) {
                return res.status(400).send({
                    ok: false,
                    message: "Informe todos os campos."
                });
            }

            const contato = await this.contatoService.criar({
                nome,
                email,
                mensagem
            });

            return res.status(201).send({
                ok: true,
                message: "Contato criado com sucesso!",
                data: contato
            });
        } catch (error) {
            return handleError(error, res);
        }
    }

    public async deletar(req: Request, res: Response) {
        try {
            const contatoId = req.params.id;

            if (!isValidId(contatoId)) {
                return res.status(400).send({
                    ok: false,
                    message: "Id informado é inválido."
                });
            }

            const contatoExiste = await this.contatoService.obterPorId(contatoId);
            if (!contatoExiste) {
                return res.status(404).send({
                    ok: false,
                    message: "Contato não encontrado."
                });
            }

            const contato = await this.contatoService.deletar(contatoId);
            return res.status(200).send({
                ok: true,
                message: "Contato deletado com sucesso!",
                data: contato
            });
        } catch (error) {
            return handleError(error, res);
        }
    }
}