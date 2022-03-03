
import { ContaCorrente } from "./ContaCorrente.js";//precisa passar a extensão do arquivo

const cliente1 = new ContaCorrente();
cliente1.depositar(100);
cliente1.sacar(50);
console.log(cliente1);