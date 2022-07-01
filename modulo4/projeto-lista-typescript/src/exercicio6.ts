type Clientes = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

const listaClientes: Clientes[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

function filtraDebitos(debito: Clientes[]):Clientes[] {
    const emprestimo = debito.map((item:Clientes)=>{
        let totalDebito = item.saldoTotal

        for(let debito of item.debitos){
             totalDebito - debito
        }

        const saldoParaEmprestimo: Clientes = {
            cliente: item.cliente,
            saldoTotal: totalDebito,
            debitos: []
        }

        return saldoParaEmprestimo
    })

    const clienteParaEmprestimo: Clientes[] = emprestimo.filter((item: Clientes)=> {
        return item.saldoTotal && item.debitos
    })

    return clienteParaEmprestimo

}

console.log(filtraDebitos(listaClientes))
