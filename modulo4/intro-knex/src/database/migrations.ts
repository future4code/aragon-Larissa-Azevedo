import connection from "./connection";

const criarTabelaFuncionários = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS Funcionários (
            id INT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE
            );
        `)

    console.log("Tabela Funcionários criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela Funcionários.")
        console.log(error.sqlMessage)
    }
}

async function popularTabelaFuncionários() {
    try {
        await connection.raw(`
            INSERT INTO Funcionários (id, nome, email)
            VALUES 
            (1, "Luana", "lua@lbn.com"),
            (2, "Vinicius", "vini@lbn.com"),
            (3, "Laura", "lau@lbn.com");
        `)
        
        console.log("Tabela Funcionários populada com sucesso.")
    } catch (error) {
        console.log("Erro ao popular tabela Funcionários.")
        console.log(error.sqlMessage)
    }
}

criarTabelaFuncionários()
.then(() => popularTabelaFuncionários())
.finally(() => process.exit())