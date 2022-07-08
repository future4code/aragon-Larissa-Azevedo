import express, { Request, Response } from "express";
import cors from "cors";
import { Client, bills, date } from "./types";
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

app.get("/teste", (req:Request, res:Response)=>{
    res.status(200).send(bankClients)
})

//endpoint 1 - criar conta

app.post("/users",(req:Request, res:Response):void=>{
    let errorCode = 400;

    try {
        const allClients: Client[] = bankClients
        const {name, cpf, birthday} = req.body

        const array:string[] = birthday.split("/")
        const birthdayFormated: date = {
            day:Number(array[0]),
            month:Number(array[1]),
            year:Number(array[2])
        };

        const currentDate:date ={
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

        const checkCPF: Client | undefined = bankClients.find(client => client.cpf === cpf)

        if(checkCPF){
            errorCode = 403
            throw new Error("Error: CPF already exists.");            
        }

        const newClient:Client ={
            id: Date.now(),
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