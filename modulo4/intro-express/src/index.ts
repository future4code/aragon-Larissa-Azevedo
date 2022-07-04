//_Exercício 1_
import express, {Request, Response} from "express";
import cors from "cors";
import { request } from "http";

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("Servidor funcionando! :)")
})
app.listen(3003, () => console.log("Servidor está funcionando! :)"))

//_Exercício 2_

type Usuarios = {
    id: number;
    name: string;
    phone: number | string;
    email: string;
  };
  
 const listaUsuarios: Usuarios[] = [
    {
      id: 1,
      name: "Leanne Graham",
      phone: "1-770-736-8031 x56442",
      email: "Sincere@april.biz",
    },
  
    {
      id: 2,
      name: "Ervin Howell",
      phone: "010-692-6593 x09125",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      phone: 1 - 463 - 123 - 4447,
      email: "Nathan@yesenia.net",
    },
  ];

//_Exercicio 3 _

app.get("/listaUsuarios", (req: Request, res:Response) => {
    res.status(200).send(listaUsuarios)
})

//_Exercicio 4_

app.get("/listaUsuarios/:id", (req:Request, res:Response) => {
    const id = Number(req.params.id)
    
    const idUsuario = listaUsuarios.filter(usuario => usuario.id === id)

    res.status(200).send(idUsuario)
})



