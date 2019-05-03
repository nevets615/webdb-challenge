
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('id');
        tbl.string('name', 128).notNullable().unique();
        tbl.string()
        tbl.boolean('completed').defaultTo(false);
        tbl.timestamps(true, true);
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
  };
