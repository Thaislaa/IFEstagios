import { prisma } from "../database/prisma.js";
import type { CreateContatoDto } from "../dtos/create-contato.dto.js";

export class ContatoService {
    public async listar() {
        const contatos = await prisma.contato.findMany()
        return contatos
    }

    public async obterPorId(id: number) {
        const contato = await prisma.contato.findUnique({
            where: {
                id
            }
        })

        return contato
    }

    public async criar(dados: CreateContatoDto) {
        const contato = await prisma.contato.create({
            data: dados
        })

        return contato
    }

    public async deletar(id: number) {
        const contato = await prisma.contato.delete({
            where: {
                id
            }
        })

        return contato
    }
}