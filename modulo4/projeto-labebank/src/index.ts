import express, { Request, Response } from "express";
import cors from "cors";
import { Client, Bills, Date } from "./types";
import { bankClients } from "./data";


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

app.get("/clientList", (req:Request, res:Response)=>{
    res.status(200).send(bankClients)
})

//endpoint 1 - criar conta

app.post("/users",(req:Request, res:Response):void=>{
    let errorCode = 400;

    try {
        const allClients: Client[] = bankClients
        const {name, cpf, birthday} = req.body

        const array:string[] = birthday.split("/")
        const birthdayFormated: Date = {
            day:Number(array[0]),
            month:Number(array[1]),
            year:Number(array[2])
        };

        const currentDate:Date ={
            day: new Date().getDate(),
            month: new Date().getMonth() +1,
            year: new Date().getFullYear()
        }

        const formatCpf:string = cpf.split(".").join("").split("-").join("");

        if(!name || !cpf || !birthday){
            errorCode = 422;
            throw new Error("Error: some inputs aren't properly filled. Please, check your inputs.");            
        }

        if(currentDate.year - birthdayFormated.year < 18){
            errorCode = 422;
            throw new Error("Error: You must at least 18 years old to create an account.");            
        }

        if (formatCpf.length !== 11 || isNaN(Number(formatCpf))){
            errorCode = 422;
            throw new Error("Error: Expected only 11 numeric digits, please check your inputs.");          
        } 

        const checkCPF: Client = bankClients.find(client => client.cpf === cpf)

        if(checkCPF){
            errorCode = 403
            throw new Error("Error: CPF already exists.");            
        }

        const lastId = bankClients[bankClients.length -1]

        const newClient:Client ={
            id: lastId.id + 1,
            name: name,
            cpf:cpf,
            birthday:birthday,
            balance: 0,
            transactions: []
        }

        allClients.push(newClient);
        res.status(201).send({message:"Client account successfully created!", clients: allClients })     

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
})

//endpoint 2 - pegar saldo

app.get("/users/:id", (req: Request, res: Response): void => {
  let errorCode = 400;

  try {
    const id: number = Number(req.params.id);

    if (!id) {
      errorCode = 404;
      throw new Error("Error: please, add an id");
    }

    const accountBalance: Client = bankClients.find((client) => client.id === id);

    if (!accountBalance) {
      errorCode = 404;
      throw new Error("Error: Client not found");
    }

    res.status(200).send({ message: `This client have R$${accountBalance.balance}` });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

//endpoint 3 - adicionar saldo

app.put("/users/:id", (req: Request, res: Response): void => {
  let errorCode = 400

  try {
    const id = Number(req.params.id)
    const deposit = req.body.deposit

    if (typeof deposit !== "number") {
      errorCode = 422
      throw new Error("Error: deposit must be a number. Please check your input.");
    }

    if (deposit <= 0) {
      errorCode = 422
      throw new Error("Error: deposit can't be a value smaller than zero. Please check your input.");
    }

    const clientAccount = bankClients.find((account) => {
      return account.id === id
    })

    if (!clientAccount) {
      errorCode = 404
      throw new Error("Error: Account not found. Please check your input.");

    }

    clientAccount.balance += deposit

    res.status(200).send({ message: "Deposit successfully done.", clientAccount: clientAccount })

  } catch (error) {
    res.status(errorCode).send({ message: error.message })

  }})
  
//endpoint 4 - pagar conta

app.put("/users/:id/pay", (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const id = Number(req.params.id)
    const value = req.body.value
    const description = req.body.description
    

    if (!value || !description) {
      errorCode = 406
      throw new Error("Error: Missing params. Please, check your inputs.");
    }

    if (typeof value !== "number" || typeof description !== "string") {
      errorCode = 406
      throw new Error("Error: 'value' expected a number and 'description', a string. Please check your inputs ");
    }

    if (value <= 0) {
      errorCode = 406
      throw new Error("Error: Payment value must be greater than zero");
    }

    if (description.length < 6) {
      errorCode = 406
      throw new Error("Error: Your description must be at least 6 characters long. Please, check your input.");
    }

    const clientAccount = bankClients.find((account) => {
      return account.id === id
    })

    if (!clientAccount) {
      errorCode = 404
      throw new Error("Error: Account not found. Please check your input.");
    }

    if (clientAccount.balance < value) {
      errorCode = 401
      throw new Error("Error: Your funds are insufficient to complete this transaction.");
    }

    clientAccount.balance -= value

    const currentDate = new Date().toLocaleString().split(" ")[0]

    const newPayment: Bills = {
      value: value,
      dueDate: currentDate,
      description: description
    }

    clientAccount.transactions.push(newPayment)

    res.status(200).send({ message: "Successful payment! Now you can check you current balance.", clientAccount: clientAccount })

  } catch (error) {
    res.status(errorCode).send({ message: error.message })

  }
})

