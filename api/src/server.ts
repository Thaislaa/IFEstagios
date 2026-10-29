import express from "express"

import { estudanteRoutes } from "./routes/estudante-routes.js";
import { empresaRoutes } from "./routes/empresa-routes.js";
import { contatoRoutes } from "./routes/contato-routes.js";

const app = express();

app.use(express.json());

app.use("/estudantes", estudanteRoutes);
app.use("/empresas", empresaRoutes);
app.use("/contatos", contatoRoutes);

app.listen(3333, () => {
    console.log("API rodando na porta 3333");
});