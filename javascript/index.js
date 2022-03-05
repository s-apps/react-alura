
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Teste", 11000, "000000000-00");
const gerente = new Gerente("Teste G", 1200, "111111111-11");

diretor.cadastrarSenha("123456");

const estaLogado = SistemaAutenticacao.login(diretor, "123456" );

console.log(estaLogado)