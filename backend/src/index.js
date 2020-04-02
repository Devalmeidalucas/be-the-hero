const express = require('express');
const cors  = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

/** para endereçar a página inseri deepois de 
 * origin o endereço http 
 * ai fica depois de origin:http://meuaplicativo.com */
app.use(express.json());
app.use(routes);
/**
 * metodods HTTP
 * 
 * .get : é para bucar/listar informações do back end
 * .post : Criar uma informação
 * .put : Alterar uma informação 
 * .delete : Apagar uma informação
 */
/**
 * Tipos de paramentros:
 * 
 * Query paramers: parametros nomeados enviados na rota após "?" (filtros e paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 *  Request body: Corpo da requisão, utilizado para criar ou alterar 
 */

 /**
  * request: guarda dados da requisaição do usuario
  * response:retorna resposta ao usuario
  * 
  */

  /**
   * Bancos de Dados:
   * SQL: MuSQL, SQLite , PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchBD
   */

   /**
    * intalas Driver: SELECT * FROM users
    * Query Builder: table ('users').select('*')
    * 
    */

    /**
     * Entidade - ONG
     * CASO (INCIDENT)
     * 
     * PENSAR NASFUNCIONALIDADE
     * 
     * Login de ONG
     * Logout
     * 
     * Cadastro de ONG
     * Cadastro de novos casas
     * Deletar casos
     * Listara casos especificos
     * Listar todos os casos
     * Entrar em contato com a ONG
     */

     /**
      * para criar tabela do banco de dados
      * acessar o knex.js 
      * search for MIGRATIONS (para criar histórico de alterações)
      * 
      */
app.listen(3333);
