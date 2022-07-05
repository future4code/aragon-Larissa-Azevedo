import express, { Request, Response } from "express";
import cors from "cors";

//_Exercício 1_
const app = express();
app.use(express.json());

app.listen(3003, () => console.log("Servidor está rodando!"));

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

//_Exercício 2_

type afazeres = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

let listaAfazeres: afazeres[] = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 2,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  },
  {
    userId: 2,
    id: 4,
    title: "et porro tempora",
    completed: true
  },
];
