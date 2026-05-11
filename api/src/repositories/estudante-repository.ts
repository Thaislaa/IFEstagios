import { prisma } from "../../lib/prisma.js";
import type { CreateEstudanteDto } from "../dtos/create-estudante.dto.js";
import type { UpdateEstudanteDto } from "../dtos/update-estudante.dto.js";

export class EstudanteRepository {
    public async listar() {
        const estudantes = await prisma.estudante.findMany();
        return estudantes
    }

    public async obterPorId(id: string) {
        const estudante = await prisma.estudante.findUnique({
            where: {
                id
            }
        })

        return estudante
    }

    public async criar(dados: CreateEstudanteDto) {
        const estudante = await prisma.estudante.create({
            data: dados
        })

        return estudante
    }

    public async atualizar(id: string, dados: UpdateEstudanteDto) {
        const estudante = await prisma.estudante.update({
            where: {
                id
            },
            data: dados
        })

        return estudante
    }

    public async deletar(id: string) {
        const estudante = await prisma.estudante.delete({
            where: {
                id
            }
        })

        return estudante
    }
}