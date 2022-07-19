import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { createNewPerfume } from "./endpoints/createNewPerfume";
import { getPerfumes } from "./endpoints/getPerfumes";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Implemente seus endpoints abaixo

app.post("/perfumes", createNewPerfume)
app.get("/perfumes", getPerfumes)