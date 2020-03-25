const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Metodos HTTP:
  * GET:   Buscar/listar uma informacao do back-end
  * Post:  Criar uma informacao do back-end
  * PUT:   Alterar uma informacao no back-end
  * DELETE:Deletar uma informacao no back-end
  * 
  */

  /**
   * Tipos de parametros
   * 
   * Query params: parâmetros nomeados enviados na rota após a 'interrogação' (?name=Ariana)(Filtros, paginação)
   * Route params: parâmetros utilizados para identificar recursos (/:id')
   * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
   */


   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL SErver
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * from users
     * Query Builder: table('users').select('*').where()
     */
