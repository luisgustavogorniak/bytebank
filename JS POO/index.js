import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAtenticacao.js";

const diretor = new Diretor ("Juca", 10000, 11122233344);
diretor.cadastrarSenha("123456789")
const gerente = new Gerente ("Tiao", 5000, 22233344455);
gerente.cadastrarSenha("123")

const cliente = new Cliente("Zeide", 33344455566, "1234")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "1234");
console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
