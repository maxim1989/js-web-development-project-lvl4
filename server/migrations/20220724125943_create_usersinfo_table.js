// @ts-check

export const up = (knex) => (
    knex.schema.createTable('usersinfo', (table) => {
        table.increments('id').primary();
        table.string('first');
        table.string('last');
        table.integer('user');
    })
);
  
export const down = (knex) => knex.schema.dropTable('usersinfo');
