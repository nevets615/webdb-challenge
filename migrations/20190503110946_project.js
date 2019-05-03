
exports.up = function(knex, Promise) {
    return knex.schema.createTable('project', tbl => {
        tbl.increments('id');
        tbl.string('name', 128).notNullable().unique();
        tbl.string('proj_description')
        tbl.boolean('completed').defaultTo(false);
        tbl.timestamps(true, true);
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project');
  };
