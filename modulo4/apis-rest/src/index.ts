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
      throw new Error( "Nome, email, idade e 'role' são requisitos obrigatórios");
    }

    if(typeof name !== "string" || typeof email !== "string") {
        erro = 422;
        throw new Error("'Nome' e 'email' devem ser uma string ");        
    }

    if(typeof age !== "number"){
        erro = 422;
        throw new Error("'Idade' deve ser um número");
    }

    // if(role !== "ADMIN" || "NORMAL"){
    //     erro = 422;
    //     throw new Error("'Role' deve ser 'Admin' ou 'Normal'");        
    // }


    const newUser:User = {
        id: Date.now(),
        name: name,
        email: email,
        age: age,
        role: role
    }

    // const checkEmail:string = users.findIndex(user => user.email === email)
    // if(checkEmail < 1){
        // erro = 422;
        // throw new Error("Email já existe.");
        
    //     users[checkEmail].email = email
    // } 

    users.push(newUser);
    res.status(201).send({mensagem:"Novo usuário criado!", usuários: users})

  } catch (error:any) {
      if(res.statusCode !== 200) {
          res.status(500).end
      } else{
          res.status(erro).send(error.message)
      }
  }
});
