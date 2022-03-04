
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";//precisa passar a extensão do arquivo

const cliente1 = new Cliente("Teste 1", "000000000-00");
const conta1 = new ContaCorrente(cliente1, "000");


const cliente2 = new Cliente("Teste 2", "111111111-11");
const conta2 = new ContaCorrente(cliente2, "111");


conta1.depositar(100);
conta2.depositar(50);

console.log("conta corrente 1", conta1);
console.log("conta corrente 2", conta2);

conta1.transferir(50, conta2);

console.log("conta corrente 1", conta1);
console.log("conta corrente 2", conta2);

console.log("cliente 1", conta1.cliente);
console.log("cliente 2", conta2.cliente);
console.log("Número de Contas", ContaCorrente.numeroDeContas);
