import { prisma } from "../../lib/prisma.js";
import type { CreateEmpresaDto } from "../dtos/create-empresa.dto.js";
import type { UpdateEmpresaDto } from "../dtos/update-empresa.dto.js";

export class EmpresaRepository {
    public async listar() {
        const empresas = await prisma.empresa.findMany()
        return empresas
    }

    public async obterPorId(id: string) {
        const empresa = await prisma.empresa.findUnique({
            where: {
                id
            }
        })

        return empresa
    }

    public async criar(dados: CreateEmpresaDto) {
        const empresa = await prisma.empresa.create({
            data: dados
        })

        return empresa
    }

    public async atualizar(id: string, dados: UpdateEmpresaDto) {
        const empresa = await prisma.empresa.update({
            where: {
                id
            },
            data: dados
        })

        return empresa
    }

    public async deletar(id: string) {
        const empresa = await prisma.empresa.delete({
            where: {
                id
            }
        })

        return empresa
    }
}