// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Request, Response, Express } from "express";
//importar a classe player do arquivo .ts (app.ts)
import { Player } from "./models/Player.js";

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();

//middleware para que o servidor entenda requisicoes no corpo do JSON
app.use(express.json());

// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8081;

//instaciacao de um jogador usando a classe player
//jogador hiro com 100 de saude e 1 de vida
//importado da classe player.ts let para poder ser manipulado depois
let player1: Player = new Player("Hero", 100, 1);

//rota GET para obter informacoes do jogador
// ao acessar o rota "/player", o servidor respondera com os dados do jogador
//a funcao callback recebe 2 parametros req (requisicao) res (response)
app.get("/player", (req: Request, res: Response) => {
  res.json({
    message: "Informacoes do jogador",
    player: player1,
  });

});

app.post("/player/attack", (req: Request, res: Response) => {
  const attackMessage = player1.attack();// chama o metod attack do jogador e retorna json com a mensagem de ataque
  res.json({
    message: attackMessage,
  });

});

//rotaa POST para o jogador receber dano
//ao acessa o rota "/player/take-demage"

app.post("/player/take-damage", (req: Request, res: Response) => {
  //extrai o valor do dano da requisicao
  const { damage } = req.body;
  //chama o metodo takeDemage
  const damageMessage = player1.takeDamage(damage);
  //retorna a mensagem JSON do dano e o estado do jogador
  res.json({
    //retorna a mensagem de dano recebido
    action: damageMessage,
    //retorna a mensage4m de dano
    currentHealth: player1.health,
    //retorna o nivel atual
    currentLevel: player1.level

  });
});

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log("Rotas disponiveis: ")
  console.log(`GET http://localhost:${PORT}/player - obrer informacoes do jogador`);
  console.log(`POST http://localhost:${PORT}/player/attack - jogadoe realiza um ataque`);
  console.log(`POST http://localhost:${PORT}/player/take-damage - jogador recebe dano`);
});