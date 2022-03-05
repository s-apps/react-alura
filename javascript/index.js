
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Cliente } from "./Cliente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Teste", 11000, "000000000-00");
const gerente = new Gerente("Teste G", 1200, "111111111-11");
const cliente = new Cliente("Teste Cli", "33333333333", "123");

diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("123");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1234567" );
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123");

console.log("diretor está logado ", diretorEstaLogado);
console.log("gerente está logado ", gerenteEstaLogado);
console.log("cliente está logado ", clienteEstaLogado);