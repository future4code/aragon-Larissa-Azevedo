import express, { Request, Response } from "express";
import cors from "cors";
import { User, USER_ROLE, users } from "./data";

//_Exercício 1_ = data.ts

//_Teste de API_

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () =>
  console.log("Servidor está funcionando em http://localhost:3003/apisrest :)")
);

app.get("/apisrest", (req: Request, res: Response) => {
  res.status(200).send({
    message: "Server is running on port 3003 :)",
  });
});

//_Exercício 2_

app.get("/users", (req: Request, res: Response) => {
  const role = req.query.role as string;

  if (!role) {
    return res.status(200).send({ users: users });
  }

  const filterRole = users.filter((user) => {
    return user.role === role;
  });

  res.status(200).send({ users: filterRole });
});

//_Exercício 3_

app.post("/users", (req: Request, res: Response) => {
  let erro: number = 400;

  try {
    const { name, email, age, role } = req.body;

    if (!name || !email || !age || !role) {
      erro = 422;
      throw new Error(
        "Nome, email, idade e 'role' são requisitos obrigatórios"
      );
    }

    if (typeof name !== "string" || typeof email !== "string") {
      erro = 422;
      throw new Error("'Nome' e 'email' devem ser uma string ");
    }

    if (typeof age !== "number") {
      erro = 422;
      throw new Error("'Idade' deve ser um número");
    }

    if (role !== "Admin" && role !== "Normal") {
      console.log(role);
      erro = 422;
      throw new Error("'Role' deve ser 'Admin' ou 'Normal'");
    }

    const indexEmail = users.findIndex((user) => user.email === email);
    if (indexEmail > 0) {
      erro = 400;
      throw new Error("Email já existe!");
    }

    const newUser: User = {
      id: Date.now(),
      name: name,
      email: email,
      role: role,
      age: age,
    };

    users.push(newUser);
    res.status(201).send({ mensagem: "Novo usuário criado!", usuários: users });
  } catch (error) {
    res.send(error.message);
  }
});

// _Exercício 4_

app.put("/users/:id", (req: Request, res: Response) => {
  let erro: number = 400;

  try {
    const { id } = req.params;
    const { email } = req.body;

    
  } 
  
  catch (error) {


  }
});

//_Exercício 5_

app.delete("/users/:id", (req: Request, res: Response) => {
  let erro: number = 400;

  try {
    const { id } = req.params;

    const userIndex = users.findIndex((user) => user.id == Number(id));

    if (userIndex < 0) {
      erro = 422;
      throw new Error("Id inválido!");
    }

    users.splice(userIndex, 1);
    res.status(200).send({ mensagem: "Usuário deletado com sucesso!" });
  } catch (error: any) {
    if (res.statusCode !== 200) {
      res.status(500).end();
    } else {
      res.status(erro).send(error.message);
    }
  }
});
