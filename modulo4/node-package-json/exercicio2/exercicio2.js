//_Exercício 2_

let operacoes = process.argv[2];

switch (operacoes) {
    case "add":
        console.log(Number(process.argv[3]) + Number(process.argv[4]))
    break;

    case "sub":
        console.log(Number(process.argv[3]) - Number(process.argv[4]))
    break;

    case "mult":
        console.log(Number(process.argv[3]) * Number(process.argv[4]))
    break;

    case "div":
        console.log(Number(process.argv[3]) / Number(process.argv[4]))
    break;    
}
