/**
 * up = tudo oque voce quer criar na tabela
 */

exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
       
        /**
         * muito importante: os nomes das colunas precisam estar certos, se criar com nome errado usa
         * o comando roll
         */
    });
  };
/**
 * down = é tudo oque voce quer fazer caso algo em up de errado
 */
exports.down = function(knex) {
 return  knex.schema.dropTable('ongs');
};
