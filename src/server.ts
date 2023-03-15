// Importações básicas do node
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

// Importando a conexão com o mongo
import { conexaoMongo } from './database/mongo';

// ÁREA PARA IMPORTAR AS ROTAS. Exemplo: 
import mainRoutes from './routes/index';

// Configuração do dotenv
dotenv.config();

// Executando a conexão com o mongo
conexaoMongo();
 
// Expressão do servidor 
const server = express();

// Configuração do mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//  Criando uma rota para pasta public, utilizando o path.join para juntar o diretório do arquivo com a pasta public
server.use(express.static(path.join(__dirname, '../public')));
 
// OPCIONAL: Deixando nosso servidor preparado para receber dados do formulário de forma POST
server.use(express.urlencoded({extended: true}));

// ÁREA PARA CHAMAR AS ROTAS. Exemplo:
server.use(mainRoutes);

// Criando a página não encontrada
server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada');
});

// listen da porta do servidor configurada pelo dotenv
server.listen(process.env.PORT);