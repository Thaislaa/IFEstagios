import { prisma } from "../lib/prisma.js";

async function main() {
    const estudante = prisma.estudante.findMany()
    console.log(estudante)
}

main()