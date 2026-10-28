import type { Request, Response } from "express";
import { EmpresaService } from "../services/empresa-service.js";
import { handleError } from "../utils/handle.error.js";
import { isValidId } from "../utils/is-valid-id.js";

export class EmpresaController {
    private empresaService = new EmpresaService();

    public async listar(req: Request, res: Response) {
        try {
            const empresas = await this.empresaService.listar();

            return res.status(200).send({
                ok: true,
                message: "Empresas listadas com sucesso!",
                data: empresas
            });
        } catch (error) {
            return handleError(error, res);
        }
    }

    public async obterPorId(req: Request, res: Response) {
        try {
            const empresaId = req.params.id;

            if (!isValidId(empresaId)) {
                return res.status(400).send({
                    ok: false,
                    message: "Id informado é inválido."
                });
            }

            const empresa = await this.empresaService.obterPorId(empresaId);
            if (!empresa) {
                return res.status(404).send({
                    ok: false,
                    message: "Empresa não encontrada."
                });
            }

            return res.status(200).send({
                ok: true,
                message: "Empresa encontrada com sucesso!",
                data: empresa
            });
        } catch (error) {
            return handleError(error, res);
        }
    }

    public async criar(req: Request, res: Response) {
        try {
            const { razaoSocial, nomeFantasia, enderecoComercial,
                setorAtuacao, emailCorporativo, cnpj, senha } = req.body;

            if (!razaoSocial || !nomeFantasia || !enderecoComercial ||
                !setorAtuacao || !emailCorporativo || !cnpj || !senha) {
                return res.status(400).send({
                    ok: false,
                    message: "Informe todos os campos."
                });
            }

            const empresa = await this.empresaService.criar({
                razaoSocial, nomeFantasia, enderecoComercial,
                setorAtuacao, emailCorporativo, cnpj, senha
            });

            return res.status(201).send({
                ok: true,
                message: "Empresa criada com sucesso!",
                data: empresa
            });
        } catch (error) {
            return handleError(error, res);
        }
    }

    public async atualizar(req: Request, res: Response) {
        try {
            const empresaId = req.params.id;
            const { razaoSocial, nomeFantasia, enderecoComercial,
                setorAtuacao, emailCorporativo, senha } = req.body;

            if (!isValidId(empresaId)) {
                return res.status(400).send({
                    ok: false,
                    message: "Id informado é inválido."
                });
            }

            const empresaExiste = await this.empresaService.obterPorId(empresaId);
            if (!empresaExiste) {
                return res.status(404).send({
                    ok: false,
                    message: "Empresa não encontrada."
                });
            }

            if (!razaoSocial && !nomeFantasia && !enderecoComercial &&
                !setorAtuacao && !emailCorporativo && !senha) {
                return res.status(400).send({
                    ok: false,
                    message: "Informe pelo menos um campo para ser atualizado."
                });
            }

            const empresa = await this.empresaService.atualizar(empresaId, {
                razaoSocial, nomeFantasia, enderecoComercial,
                setorAtuacao, emailCorporativo, senha
            });

            return res.status(200).send({
                ok: true,
                message: "Empresa atualizada com sucesso!",
                data: empresa
            });
        } catch (error) {
            return handleError(error, res);
        }
    }

    public async deletar(req: Request, res: Response) {
        try {
            const empresaId = req.params.id;

            if (!isValidId(empresaId)) {
                return res.status(400).send({
                    ok: false,
                    message: "Id informado é inválido."
                });
            }

            const empresaExiste = await this.empresaService.obterPorId(empresaId);
            if (!empresaExiste) {
                return res.status(404).send({
                    ok: false,
                    message: "Empresa não encontrada."
                });
            }

            const empresa = await this.empresaService.deletar(empresaId);

            return res.status(200).send({
                ok: true,
                message: "Empresa deletada com sucesso!",
                data: empresa
            });
        } catch (error) {
            return handleError(error, res);
        }
    }
}