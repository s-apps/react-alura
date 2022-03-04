
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";//precisa passar a extensão do arquivo

const conta1 = new ContaCorrente();
conta1.agencia = "000";
const cliente1 = new Cliente();
cliente1.nome = "Teste 1";
cliente1.cpf = "000000000-00";
conta1.cliente = cliente1;

const conta2 = new ContaCorrente();
conta2.agencia = "111"; 
const cliente2 = new Cliente();
cliente2.nome = "Teste 2";
cliente2.cpf = "111111111-11";
conta2.cliente = cliente2;


conta1.depositar(100);
conta2.depositar(50);

console.log("conta corrente 1", conta1);
console.log("conta corrente 2", conta2);

conta1.transferir(50, conta2);

console.log("conta corrente 1", conta1);
console.log("conta corrente 2", conta2);

console.log("cliente 1", conta1.cliente);
console.log("cliente 2", conta2.cliente);
