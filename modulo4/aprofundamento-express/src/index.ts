import express, { Request, Response } from "express";

//_Exercício 1_
const app = express();
app.use(express.json());

app.listen(3003, () => console.log("Servidor está rodando!"));

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

//_Exercício 2_

type Afazeres = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

let listaAfazeres: Afazeres[] = [
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
    completed: false,
  },
  {
    userId: 2,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
];

//_Exercício 3_

app.get("/afazeres/:userId", (req: Request, res: Response) => {
  const userId = Number(req.params.userId);
  const afazeresUsuario = listaAfazeres.filter((afazer) => {
    return afazer.userId === userId;
  });

  res.send({
    listaAfazeres: afazeresUsuario,
  });
});

//_Exercício 4_

app.post("/afazeres", (req: Request, res: Response) => {
  const { userId, title } = req.body;

  const ultimoDaLista = listaAfazeres[listaAfazeres.length - 1];

  const novoAfazer: Afazeres = {
    id: ultimoDaLista.id + 1,
    userId: userId,
    title: title,
    completed: false,
  };

  listaAfazeres.push(novoAfazer);
  res.send({
    mensagem: "Afazer adicionado à lista!",
    afazer: novoAfazer,
  });
});

//_Exercício 5_

app.get("/afazeres/:id", (req: Request, res:Response)=>{
  const id = Number(req.params.id)

  const status = listaAfazeres.map(concluido =>{
    if(concluido.completed === true){
      return{...concluido}
    }else{
      return concluido
    }
  })

  listaAfazeres = status

  const atualizaLista = listaAfazeres.filter((elemento)=>{
    elemento.completed===true
  })

  res.status(201).send({mensagem:"status alterado!", afazeres: atualizaLista[0]})

})

//_Exercício 6_

app.delete("/afazeres/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const deletaAfazer = listaAfazeres.findIndex((afazer) => {
    return afazer.id === id;
  });
  listaAfazeres.splice(deletaAfazer, 1);
  res.send({
    mensagem: "Afazer deletado com sucesso!",
    afazeres: listaAfazeres,
  });
});

//_Exercício 7_

app.get("/afazeres", (req: Request, res: Response) => {
  const afazerConcluido = req.query.afazerConcluido;

  if (afazerConcluido !== "true" && afazerConcluido !== "false") {
    return res.send({
      afazerConcluido: afazerConcluido,
      listaAfazeres: listaAfazeres,
    });
  }

  if (afazerConcluido === "true") {
    const status = listaAfazeres.filter((afazer) => {
      return afazer.completed === true;
    });

    return res.send({
      afazeres: status,
      afazerConcluido: afazerConcluido,
    });
  } else {
    const status = listaAfazeres.filter((afazer) => {
      return afazer.completed === false;
    });
    return res.send({
      afazeres: status,
      "ainda não concluídos": afazerConcluido,
    });
  }
});

//as requisições só estão retornando "false". true não funciona
