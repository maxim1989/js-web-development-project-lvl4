export const up = (knex) => (
    knex.schema.createTable('task', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.string('description');
        table.integer('statusid');
        table.integer('creatorid');
        table.integer('executorid');
        table.timestamp('created').defaultTo(knex.fn.now());
        table.timestamp('updated').defaultTo(knex.fn.now());
    })
);;

export const down = (knex) => knex.schema.dropTable('task');
