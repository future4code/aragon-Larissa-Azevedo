import express, { Request, Response } from "express";
import cors from "cors";
import { User, USER_ROLE, users  } from "./data";

//_Exercício 1_ = data.ts

//_Teste de API_

const app = express();

app.use(express.json())

app.use(cors())

app.listen(3003, () => console.log("Servidor está funcionando em http://localhost:3003/apisrest :)"))

app.get("/apisrest", (req:Request, res:Response)=>{
    res.status(200).send({
        message:"Server is running on port 3003 :)"
    })
})

//_Exercício 2_

app.get("/users", (req: Request, res: Response)=>{
    const role = req.query.role as string;

    if(!role){
        return res.status(200).send({users:users})
    };


const filterRole = users.filter((user)=>{
   return user.role === role
    
});

res.status(200).send({users:filterRole})

});

//_Exercício 3_





