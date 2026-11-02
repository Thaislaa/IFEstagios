import express from "express"

import { estudanteRoutes } from "./routes/estudante-routes.js";
import { empresaRoutes } from "./routes/empresa-routes.js";
import { contatoRoutes } from "./routes/contato-routes.js";
import { authRoutes } from "./routes/auth-routes.js";
import cors from "cors";

const app = express();

app.use(cors({
    origin: "http://127.0.0.1:5501"
}));

app.use(express.json());

app.use("/estudantes", estudanteRoutes);
app.use("/empresas", empresaRoutes);
app.use("/contatos", contatoRoutes);
app.use("/auth", authRoutes);

app.listen(3333, () => {
    console.log("API rodando na porta 3333");
});