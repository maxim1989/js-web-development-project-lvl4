// @ts-check

export const up = (knex) => {
    return knex.schema.createTable('statuses', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.timestamp('created').defaultTo(knex.fn.now());
        table.timestamp('updated').defaultTo(knex.fn.now());
    })
};

export const down = (knex) => knex.schema.dropTable('statuses');
