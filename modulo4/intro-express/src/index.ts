//_Exercício 1_
import express, {Request, Response} from "express";
import cors from "cors";

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor está funcionando! :)"))

app.get("/", (req: Request, res: Response) => {
    res.send("Servidor funcionando! :)")
})


//_Exercício 2_

type Usuarios = {
    id: number;
    name: string;
    phone: number | string;
    email: string;
  };
  
 let listaUsuarios: Usuarios[] = [
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

//_Exercicio 5 _

app.put("/usuario/:id", (req: Request, res: Response)=>{

    const id:number = Number(req.params.id)
    const phone:number = req.body.phone

    const novoTelefone = listaUsuarios.map(usuario => {
        if(usuario.id === id){
            return {...usuario, phone:phone}
        } else {
            return usuario
        }        
    }) 

    listaUsuarios = novoTelefone

    const atualizaUsuario = listaUsuarios.filter(elemento => {
        elemento.id === id
    }) 

    res.status(201).send({mensagem:"Telefone alterado com sucesso :)", usuario:atualizaUsuario[0]})
})

//_Exercicio 6_

app.delete("/usuario/:id", (req: Request, res: Response) => {

    const id = Number(req.params.id)
    const index = listaUsuarios.findIndex(usuario => usuario.id === id)
    listaUsuarios.splice(index, 1)
    res.status(200).send(listaUsuarios)
})