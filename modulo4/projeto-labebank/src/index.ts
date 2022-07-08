import express, { Request, Response } from "express";
import cors from "cors";
import { User, bills, date } from "./types";
import { bankCustomers } from "./data";


//_Teste de API_

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () =>
  console.log("Servidor está funcionando em http://localhost:3003/labebank :)")
);

app.get("/labebank", (req: Request, res: Response) => {
  res.status(200).send({
    message: "Server is running on port 3003 :)",
  });
});

//endpoint 1 - criar conta

