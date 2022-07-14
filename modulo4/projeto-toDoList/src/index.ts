import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { getUsersList } from "./endpoints/getUsersList";
import { getTasksList } from "./endpoints/getTasksList";
import { getUserResponsibleByTask } from "./endpoints/getUserResponsibleByTask";
import { editUserNickname } from "./endpoints/editUserNickname";
import { deleteTask } from "./endpoints/deleteTask";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

// Endpoint com o callback vindo por import da pasta endpoints
app.get("/ping", ping)

// Siga o exemplo do ping acima e monte seus endpoints abaixo!
app.get("/users", getUsersList)
app.get("/tasks", getTasksList)
app.get("/tasks/:taskId/users", getUserResponsibleByTask)
app.put("/users/:userId", editUserNickname)
app.delete("/tasks/:taskId", deleteTask)