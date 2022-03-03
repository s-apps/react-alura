
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";//precisa passar a extensão do arquivo

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Teste 1";
cliente1.cpf = "000000000-00";

cliente2.nome = "Teste 2";
cliente2.cpf = "111111111-11";

const contaCorrente1 = new ContaCorrente();
contaCorrente1.agencia = "000";
contaCorrente1.cliente = cliente1;

const contaCorrente2 = new ContaCorrente();
contaCorrente2.agencia = "111"; 
contaCorrente2.cliente = cliente2;

contaCorrente1.depositar(100);
contaCorrente2.depositar(50);

console.log("conta corrente 1", contaCorrente1);
console.log("conta corrente 2", contaCorrente2);

contaCorrente1.transferir(50, contaCorrente2);

console.log("conta corrente 1", contaCorrente1);
console.log("conta corrente 2", contaCorrente2);
